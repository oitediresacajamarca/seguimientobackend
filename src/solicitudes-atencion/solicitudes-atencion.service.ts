import { Injectable } from '@nestjs/common';
import { SolicitudesAtencionRepository } from './solicitudes-atencion.repository';
import { PersonaRepository } from 'src/repositorios/persona.repository';

@Injectable()
export class SolicitudesAtencionService {

    constructor(private solicitudaten: SolicitudesAtencionRepository, private personas: PersonaRepository) { }
    async buscarSolicitudDocumento(NRO_DOCUMENTO: string) {

        let persona = await this.personas.findOne({ NRO_DOCUMENTO: NRO_DOCUMENTO })
        const solicitud = await this.solicitudaten.findOne({ where: { ID_PACIENTE: persona.ID_PERSONA, ESTADO: "P" } })

        return solicitud

    }
}
