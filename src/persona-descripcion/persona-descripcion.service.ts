import { Injectable } from '@nestjs/common';
import { PersonaDescripcionRepository } from './persona-descripcion.repository';

@Injectable()
export class PersonaDescripcionService {
    constructor(private pdr: PersonaDescripcionRepository) { }
    async getPersonaDescripcion(NRO_DOCUMENTO: string) {
        const res = await this.pdr.findOne({ NRO_DOCUMENTO: NRO_DOCUMENTO })
        console.log(res)
        return res;
    }

}
