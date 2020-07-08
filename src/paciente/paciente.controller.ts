import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { PacienteService } from './paciente.service';

@Controller('paciente')
export class PacienteController {

    constructor(private pacienteserv: PacienteService) {

    }
    @Post('prepara/:id_persona')
    async preparaPaciente(@Param() id_persona, @Body() body) {
        const resp = await this.pacienteserv.preparaPaciente(id_persona.id_persona,  body.COD_IPRESS,body.NRO_DOCUMENTO);
        return resp;
    }
}
