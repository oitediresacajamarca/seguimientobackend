import { Injectable, Body } from '@nestjs/common';
import { AtencionesRepositoy } from './atenciones.repositoy';
import { PersonaRepository } from 'src/repositorios/persona.repository';

import { MoreThan, getRepository, LessThan, Not, IsNull, MoreThanOrEqual, LessThanOrEqual, Between, Like, Any } from 'typeorm'
import { AtencionesEntity } from 'src/entidades/atenciones.entity';

import { HistoriaClinicaRepository } from 'src/historia-clinica/historia-clinica.repository';
import { DistribucionAdministrativaController } from 'src/maestros/distribucion-administrativa/distribucion-administrativa.controller';
import { DistribucionIpressRepository } from 'src/distribucion-ipress/distribucion-ipress-repository';
import { AtencionIpressRepository } from 'src/atencion-ipress/atencion-ipress-repository';
import { TrabajadorIpressRepository } from 'src/personal/trabajador-ipress.repository';
import { DiagnosticoRepository } from './diagnostico.repository';
import { SolicitudesAtencionService } from 'src/solicitudes-atencion/solicitudes-atencion.service';
import { SolicitudesAtencionRepository } from 'src/solicitudes-atencion/solicitudes-atencion.repository';


@Injectable()
export class AtencionesService {

    constructor(private atenrep: AtencionesRepositoy, private personas: PersonaRepository,
        private hcs: HistoriaClinicaRepository, private distipress: DistribucionIpressRepository,
        private atenreps: AtencionIpressRepository, private trabajadoripress: TrabajadorIpressRepository,
        private diagnosticos: DiagnosticoRepository, private solics: SolicitudesAtencionRepository) {

    }
    async nuevaAtencion(body: any) {
        let atencionnueva =await this.atenrep.save(body)
        await this.solics.update({ ID_SOLICITUD: atencionnueva.ID_SOLICITUD, ESTADO: 'P' }, { ESTADO: 'A' })
        atencionnueva.identiti=atencionnueva.ID_ATENCION
        return atencionnueva
    }

    async devolverAtencionesPersona(id_persona: number): Promise<any> {
        const respuesta = await this.atenrep.find({ ID_PACIENTE: id_persona })
        var atenciones = []

        return respuesta


    }
    async devolverAtencionesFiltrarFechas(desde: Date, hasta: Date): Promise<any> {
        hasta.setDate(hasta.getDate() + 1);
        desde.setDate(desde.getDate() + 1)

        const respuesta = await getRepository(AtencionesEntity).find({ where: { FECHA: Between(desde, hasta), ID_PACIENTE: Not(IsNull()) } })

        return respuesta


    }
    async devolverAtencionesFiltrar(desde: Date, hasta: Date, ipress: string): Promise<any> {
        hasta.setDate(hasta.getDate() + 1);
        desde.setDate(desde.getDate() + 1)


        const respuesta = await getRepository(AtencionesEntity).find({
            where: {
                FECHA: Between(desde, hasta),
                ID_PACIENTE: Not(IsNull()), ID_HC: Not(IsNull())
            }
        })

        let filtradas = []
        await Promise.all(respuesta.map((async atencion => {

            let hc = await this.hcs.findOne({ ID_HC: atencion.ID_HC })

            if (hc.COD_IPRESS != undefined) {
                if (hc.COD_IPRESS == ipress) {
                    filtradas.push(atencion)
                }
            }

        })))

        return filtradas


    }
    async devolverAtencionesFiltradasFechasAmbitoAd(body: any) {

        let desde = new Date(body.DESDE)
        let hasta = new Date(body.HASTA)
        hasta.setDate(hasta.getDate() + 1);
        desde.setDate(desde.getDate() + 1)


        let resp = await this.atenreps.find({
            where:
            {
                SUB_REGION: Like('%' + body.SUB_REGION + '%'),
                RED: Like('%' + body.RED + '%'),
                MICRORED: Like('%' + body.MICRORED + '%'),
                NOMBRE_ESTABLECIMIENTO: Like('%' + body.NOMBRE_ESTABLECIMIENTO + '%'),
                FECHA: Between(desde, hasta),
                ID_PACIENTE: Not(IsNull()), ID_HC: Not(IsNull())
            }
        })

        var atenciones = []
        await Promise.all(

            resp.map(async element => {

                let atencion: any = {}
                Object.assign(atencion, element)
                let perosnaatendida = await this.personas.findOne({ where: { ID_PERSONA: element.ID_PACIENTE } })

                if (perosnaatendida.TELEFONO == null) {
                    const solicitud = await this.solics.findOne({ ID_PACIENTE: perosnaatendida.ID_PERSONA })

                    if (solicitud != undefined) {
                        perosnaatendida.TELEFONO = solicitud.TELEF_CONTACTO
                    }
                }
                const trabajadoripress = await this.trabajadoripress.findOne({ ID_TRABAJADOR_IPRESS: element.ID_RESPONSABLE })
                const trabajadorpersona = await this.personas.findOne({ ID_PERSONA: trabajadoripress.ID_PERSONA })
                const diagnosticos = await this.diagnosticos.find({ ID_ATENCION: element.ID_ATENCION })
                atencion.personaatendida = perosnaatendida;
                atencion.trabajadoripress = trabajadoripress;
                atencion.trabajadorpersona = trabajadorpersona;
                atencion.diagnosticos = diagnosticos;
                atenciones.push(atencion)

            }));

        return atenciones
    }


}
