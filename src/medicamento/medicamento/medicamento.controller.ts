import { Controller, Get, Post, Body } from '@nestjs/common';
import { MedicamentoService } from './medicamento.service';

@Controller('medicamento')
export class MedicamentoController {

    constructor(private medics: MedicamentoService) { }

    @Get('listar')
    listar() {
        const resp = this.medics.listarMedicamentos()
        return resp;
    }
    @Post('filtrar')
    filtra(@Body() body) {
 
        const resp = this.medics.filtrarMedicamentos(body)
        return resp;
    }

}
