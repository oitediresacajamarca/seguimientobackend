import { Controller, Get, Param } from '@nestjs/common';
import { PersonaDescripcionService } from './persona-descripcion.service';

@Controller('persona-descripcion')
export class PersonaDescripcionController {
    constructor(private pd:PersonaDescripcionService){

    }
    @Get(':NRO_DOCUMENTO')
    async buscar(@Param() NRO_DOCUMENTO){
        const perdes= await this.pd.getPersonaDescripcion(NRO_DOCUMENTO.NRO_DOCUMENTO)
        return perdes;

    }
}
