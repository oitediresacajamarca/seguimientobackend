import { Controller, Get, Param } from '@nestjs/common';
import { CpmsFullService } from './cpms-full.service';

@Controller('cpms-full')
export class CpmsFullController {

    constructor(private servicio: CpmsFullService) {

    }
    @Get('coincidencias/:busqueda')
    async devolverCoincidencias(@Param() busqueda) {
        console.log(busqueda)

        const result = await this.servicio.devolverCPMS(busqueda.busqueda)
        return result
    }
}
