import { Injectable } from '@nestjs/common';
import { SolicitudesAtencionRepository } from './solicitudes-atencion.repository';
import { PersonaRepository } from 'src/repositorios/persona.repository';
import { PacienteRepository } from 'src/paciente/paciente.repository';

@Injectable()
export class SolicitudesAtencionService {

    constructor(private solicitudaten: SolicitudesAtencionRepository, private personas: PersonaRepository,
        private pacientes: PacienteRepository) { }
    async buscarSolicitudDocumento(NRO_DOCUMENTO: string) {
        let persona = await this.personas.findOne({ NRO_DOCUMENTO: NRO_DOCUMENTO })
        const solicitud = await this.solicitudaten.findOne({ where: { ID_PACIENTE: persona.ID_PERSONA, ESTADO: "P" } })
        return solicitud
    }

    async guardarNuevaSolicitud(persona: any) {
        let fecha = new Date()
        let solicitud_creada = {};  
        const personahallada = await this.personas.findOne({ where: { NRO_DOCUMENTO: persona.NRO_DOCUMENTO, ID_TIPOD: persona.ID_TIPOD } });
        if (personahallada) {
            let paciente = await this.pacientes.findOne({ where: { ID_PACIENTE: personahallada.ID_PERSONA } })
            if (paciente) {
                let solicitupendiente = await this.solicitudaten.findOne({ where: { ID_PACIENTE: paciente.ID_PACIENTE, ESTADO: 'P' } })
                if (solicitupendiente) {
                    return { solicitud: 'tiene solicitud pendiente' }
                } else {
                    solicitud_creada = await this.solicitudaten.save({
                        ID_PACIENTE: paciente.ID_PACIENTE,
                        CORREO: persona.CORREO, DESCRIPCION: persona.DESCRIPCION,
                        DOMICILIO_ACTUAL: persona.DIRECCION,
                        ESTADO: 'P',
                        FECHA_SOLICITUD: fecha.toLocaleString(),
                        ID_DISTRITO: persona.ID_DISTRITO,
                        ID_IPRESS: persona.ID_IPRESS,
                        TELEF_CONTACTO: persona.TELEFONO,
                        TELEF_CONTACTO2: '',
                    })
                }

            } else {
                let pacientecreada = await this.pacientes.save({ ID_PACIENTE: personahallada.ID_PERSONA })
                solicitud_creada = await this.solicitudaten.save({
                    ID_PACIENTE: pacientecreada.ID_PACIENTE,
                    CORREO: persona.CORREO, DESCRIPCION: persona.DESCRIPCION,
                    DOMICILIO_ACTUAL: persona.DIRECCION,
                    ESTADO: 'P',
                    FECHA_SOLICITUD: fecha.toLocaleString(),
                    ID_DISTRITO: persona.ID_DISTRITO,
                    ID_IPRESS: persona.ID_IPRESS,
                    TELEF_CONTACTO: persona.TELEFONO,
                    TELEF_CONTACTO2: '',


                })
            }

        } else {
            let personacreada = await this.personas.save(persona)
            let pacientecreada = await this.pacientes.save({ ID_PACIENTE: personacreada.ID_PERSONA })
            solicitud_creada = await this.solicitudaten.save({
                ID_PACIENTE: pacientecreada.ID_PACIENTE,
                CORREO: persona.CORREO, DESCRIPCION: persona.DESCRIPCION,
                DOMICILIO_ACTUAL: persona.DIRECCION,
                ESTADO: 'P',
                FECHA_SOLICITUD: fecha.toLocaleString(),
                ID_DISTRITO: persona.ID_DISTRITO,
                ID_IPRESS: persona.ID_IPRESS,
                TELEF_CONTACTO: persona.TELEFONO,
                TELEF_CONTACTO2: '',


            })

        }

        return solicitud_creada;

    }
}
