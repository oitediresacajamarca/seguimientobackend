import { Injectable } from '@nestjs/common';
import { AtencionesRepositoy } from './atenciones.repositoy';
import { PersonaRepository } from 'src/repositorios/persona.repository';
import console = require('console');
import { MoreThan, getRepository, LessThan, Not, IsNull, MoreThanOrEqual, LessThanOrEqual, Between } from 'typeorm'
import { AtencionesEntity } from 'src/entidades/atenciones.entity';
import { Console } from 'console';
import { HistoriaClinicaRepository } from 'src/historia-clinica/historia-clinica.repository';
import { isNull } from 'util';

@Injectable()
export class AtencionesService {

    constructor(private atenrep: AtencionesRepositoy, private personas: PersonaRepository, private hcs: HistoriaClinicaRepository) {

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
        console.log(ipress)

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


}
