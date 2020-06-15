import { Controller, Get, Param } from '@nestjs/common';
import { PersonaService } from './persona.service';

@Controller('persona')
export class PersonaController {
    constructor(private personaser: PersonaService) {

    }
    @Get(':NRO_DOCUMENTO')
    async getOne(@Param() NRO_DOCUMENTO: string) {
        console.log(NRO_DOCUMENTO)
        const uno = await this.personaser.devolverOne(NRO_DOCUMENTO);
        return uno;
    }


}
