import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fuat } from '../fuat.interface';
import { HistoriaClinicaRepository } from 'src/historia-clinica/historia-clinica.repository';
import { AtencionRegRepository } from 'src/atencion-reg/atencion-reg.repository';
import { AtencionesRepositoy } from 'src/atenciones/atenciones.repositoy';
import { IpressRepository } from 'src/ipress/ipress.repository';
import { SolicitudesAtencionRepository } from 'src/solicitudes-atencion/solicitudes-atencion.repository';
import { PersonaRepository } from 'src/repositorios/persona.repository';
import { ExamenesFisicosAtencionRepository } from 'src/examenes-fisicos-atencion/examenes-fisicos-atencion-repository';
import { AtencionDetalleEntidadRepository } from 'src/atencion-detalle/atencion-detalle-entidad-repository';
import { TrabajadorIpressRepository } from 'src/personal/trabajador-ipress.repository';
import { AtencionDiagnosticoRepository } from 'src/atencion-diagnostico/atencion-diagnostico.repository';


@Injectable()
export class FuatService {
    constructor(@InjectModel('fuat') private mod: Model<Fuat>,
        private hc: HistoriaClinicaRepository,
        private atenr: AtencionesRepositoy, private ipress: IpressRepository,
        private solicitudr: SolicitudesAtencionRepository, private perrep: PersonaRepository
        , private examanesfrep: ExamenesFisicosAtencionRepository,
        private atenciondetalle: AtencionDetalleEntidadRepository,
        private trabajador_ipress: TrabajadorIpressRepository,
        private ateciondiagosrep: AtencionDiagnosticoRepository) { }
    formatofuat

    async devuelveId(): Promise<Fuat[]> {
        const p = await this.mod.find();

        return p;
    }
    async crearFuat(fuanueva: Fuat): Promise<Fuat> {
        const fuatn = new this.mod(fuanueva);
        return await fuatn.save()




    }
    async devolverFuat(cod_fuat) {
        const fuatn = await this.mod.findOne({ numeroFuat: cod_fuat });
        return fuatn;
    }


    async generaFuatdeBase(ID_ATENCION) {

        const atencion = await this.atenr.findOne({ ID_ATENCION: ID_ATENCION });
      
        const trabajador = await this.trabajador_ipress.findOne({ ID_TRABAJADOR_IPRESS: atencion.ID_RESPONSABLE })
        const personatrabajador = await this.perrep.findOne({ ID_PERSONA: trabajador.ID_PERSONA })

        const atencion_detall = await this.atenciondetalle.findOne({ ID_ATENCION: ID_ATENCION })

        const historiaclinica = await this.hc.findOne({ ID_HC: atencion.ID_HC })
        const IPRESS = await this.ipress.findOne({ COD_IPRESS: historiaclinica.COD_IPRESS })


        this.formatofuat.codipress = IPRESS.COD_IPRESS;
        this.formatofuat.nombreipress = IPRESS.NOMBRE;

        const solicitud = await this.solicitudr.findOne({ ID_SOLICITUD: atencion.ID_SOLICITUD })

        if (solicitud != null) {
            this.formatofuat.fechasolicitud = solicitud.FECHA_SOLICITUD.toLocaleDateString('es-PE');
            this.formatofuat.horasolicitud = solicitud.FECHA_SOLICITUD.toLocaleTimeString('es-PE');
        }
        const paciente = await this.perrep.findOne({ ID_PERSONA: atencion.ID_PACIENTE })


        this.formatofuat.nombresypaciente = paciente.NOMBRES + ' ' + paciente.APELLIDO_PAT + ' ' + paciente.APELLIDO_MAT;
        this.formatofuat.sexo = paciente.ID_GENERO;

        let fechanac = new Date(paciente.FECHA_NAC);
        let hoy = new Date()



        this.formatofuat.edad = 'edad'

        this.formatofuat.nro_documento = paciente.NRO_DOCUMENTO;
        this.formatofuat.nuevocontrol = true ? true : false
        this.formatofuat.numerocontrol = false ? "1" : ""
        this.formatofuat.especialidades = [];

        const examnes0 = await this.examanesfrep.findOne({ ID_ATENCION: atencion.ID_ATENCION, NRO_ITEM: 1 })
        this.formatofuat.examenfisico.presionarterial = examnes0.VALOR
        const examnes1 = await this.examanesfrep.findOne({ ID_ATENCION: atencion.ID_ATENCION, NRO_ITEM: 2 })
        this.formatofuat.examenfisico.frecuenciacardiaca = examnes1.VALOR
        const examnes2 = await this.examanesfrep.findOne({ ID_ATENCION: atencion.ID_ATENCION, NRO_ITEM: 3 })
        this.formatofuat.examenfisico.frecuenciarespi = examnes2.VALOR
        const examnes3 = await this.examanesfrep.findOne({ ID_ATENCION: atencion.ID_ATENCION, NRO_ITEM: 4 })
        this.formatofuat.examenfisico.temperatura = examnes3.VALOR
        const examnes4 = await this.examanesfrep.findOne({ ID_ATENCION: atencion.ID_ATENCION, NRO_ITEM: 5 })
        this.formatofuat.examenfisico.satO2 = examnes4.VALOR
        const examnes5 = await this.examanesfrep.findOne({ ID_ATENCION: atencion.ID_ATENCION, NRO_ITEM: 6 })
        this.formatofuat.examenfisico.peso = examnes5.VALOR
        const examnes6 = await this.examanesfrep.findOne({ ID_ATENCION: atencion.ID_ATENCION, NRO_ITEM: 7 })
        this.formatofuat.examenfisico.talla = examnes6.VALOR
        this.formatofuat.examenfisico.descripciondecaso = '';
        this.formatofuat.tratamiento = atencion_detall.TRATAMIENTO_ACTUAL;
        this.formatofuat.examendeapoyo = '';
        this.formatofuat.motivo[0] = atencion_detall.MOTIVO;
        this.formatofuat.codipress = historiaclinica.COD_IPRESS;
        let actual = new Date();
        this.formatofuat.fechaatencion = actual.toLocaleDateString('es-PE')
        this.formatofuat.horaatencion = actual.toLocaleTimeString('es-PE')
        this.formatofuat.personal.nombresyapellidos = personatrabajador.APELLIDO_PAT + ' ' + personatrabajador.APELLIDO_MAT + ' ' + personatrabajador.NOMBRES;
        this.formatofuat.personal.colegiatura = trabajador.NUM_COLEG
        this.formatofuat.personal.profesion = ''

        const dianosticospac = await this.ateciondiagosrep.find({ ID_ATENCION: ID_ATENCION })
        this.formatofuat.diagnosticos = [];
        dianosticospac.forEach(element => {
            let diagnos: any = { cod_diag: "", item: 1, tipo_diag: "", valor_lab: "", desc_diag: "" }
            diagnos.item = element.NRO_ITEM;
            diagnos.cod_diag = element.CODIGO_DIAGNOSTICO;
            diagnos.tipo_diag = element.TIPO_DIAGNOSTICO;
            diagnos.valor_lab = element.LAB_DIAGNOSTICO;

            diagnos.desc_diag = element.CODIGO_DIAGNOSTICO;
            this.formatofuat.diagnosticos.push(diagnos)
        });

        this.formatofuat.recomendaciones = 'sd';
        return this.formatofuat;
    }

   

}
