import { Controller, Get, Param } from '@nestjs/common';
import { DistribucionGeograficaService } from './distribucion-geografica.service';

@Controller('distribucion-geografica')
export class DistribucionGeograficaController {

    constructor(private geoser: DistribucionGeograficaService) {


    }
    @Get('distrito/:cod_distrito')
    async getDistrito(@Param() cod_distrito: string) {
        console.log(cod_distrito)
        const res = await this.geoser.getDistrito(cod_distrito);
        return res;
    }



}
