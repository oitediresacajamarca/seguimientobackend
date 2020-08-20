import { Injectable } from '@nestjs/common';
import { SolicitudesAtencionRepository } from './solicitudes-atencion.repository';
import { PersonaRepository } from 'src/repositorios/persona.repository';
import { PacienteRepository } from 'src/paciente/paciente.repository';
import { In } from 'typeorm';
import { Console } from 'console';

@Injectable()
export class SolicitudesAtencionService {

    constructor(private solicitudaten: SolicitudesAtencionRepository, private personas: PersonaRepository,
        private pacientes: PacienteRepository) { }
    async buscarSolicitudDocumento(NRO_DOCUMENTO: string) {
        let persona = await this.personas.findOne({ NRO_DOCUMENTO: NRO_DOCUMENTO })
        const solicitud = await this.solicitudaten.findOne({ where: { ID_PACIENTE: persona.ID_PERSONA, ESTADO: In(["P", "D"]) } })
        return solicitud
    }

    async guardarNuevaSolicitud(persona: any) {
        let fecha = new Date()
        let solicitud_creada = {};
        let personahallada: any = {}
        personahallada = await this.personas.findOne({ where: { NRO_DOCUMENTO: persona.NRO_DOCUMENTO, ID_TIPOD: persona.ID_TIPOD } });
        if (personahallada == null) { personahallada = {} }
        Object.assign(personahallada, persona)
        if (personahallada) {
            let personaactual = await this.personas.save(personahallada)

            let paciente = await this.pacientes.findOne({ where: { ID_PACIENTE: personahallada.ID_PERSONA } })
            if (paciente) {
                let solicitupendiente = await this.solicitudaten.findOne({ where: { ID_PACIENTE: paciente.ID_PACIENTE, ESTADO: 'P' } })
                if (solicitupendiente) {
                    return { solicitud: 'tiene solicitud pendiente' }
                } else {
                    solicitud_creada = await this.solicitudaten.save({
                        ID_PACIENTE: paciente.ID_PACIENTE,
                        CORREO: persona.CORREO,
                        DESCRIPCION: persona.DESCRIPCION,
                        DOMICILIO_ACTUAL: persona.DIRECCION,
                        ESTADO: 'P',
                        FECHA_SOLICITUD: fecha.toLocaleString(),
                        ID_DISTRITO: persona.ID_DISTRITO,
                        ID_IPRESS: persona.ID_IPRESS,
                        TELEF_CONTACTO: persona.TELEFONO,
                        TELEF_CONTACTO2: '',
                        COD_CARTERA: persona.COD_CARTERA
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
                    COD_CARTERA: persona.COD_CARTERA


                })
            }

        } else {
            console.log('no existe perzona')
            console.log(persona)
            let personacreada = await this.personas.save(persona)
            console.log(personacreada)
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
                COD_CARTERA: persona.COD_CARTERA


            })

        }
        if (solicitud_creada != null) {

            return { mensage: "solicitud creada exitosamente", cod_respuesta: 1 };

        }
        else {
            return { mensage: "solicitud creada exitosamente", cod_respuesta: 0 };
        }

    }
    async derivar(ID_PACIENTE: number, derivaciones: any[], solicitud: any) {
        
        return await Promise.all(
            derivaciones.map(async (derivacion) => {

                return await this.solicitudaten.save({
                    ID_PACIENTE: ID_PACIENTE,
                    CORREO: solicitud.CORREO,
                    ESTADO: 'D',
                    COD_CARTERA: derivacion.COD_CARTERA,
                    DESCRIPCION: derivacion.Motivo,
                    ID_DISTRITO: solicitud.ID_DISTRITO,
                    TELEF_CONTACTO:solicitud.TELEF_CONTACTO,
                    ID_IPRESS:solicitud.ID_IPRESS,
                    FECHA_SOLICITUD:new Date()
                })




            })
        )

    }
}
