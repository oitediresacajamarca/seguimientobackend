import { Injectable } from '@nestjs/common';
import { PersonaRepository } from 'src/repositorios/persona.repository';

@Injectable()
export class PersonaService {
    constructor(private personrep: PersonaRepository) {

    }
    async devolverOne(num_doc: string) {

        const persona = await this.personrep.findOne(num_doc)
        return persona;
    }
}
