import { Controller, Get, Param } from '@nestjs/common';
import { BaseNotiService } from './base-noti.service';

@Controller('base-noti')
export class BaseNotiController {
    constructor(private bns: BaseNotiService) { }
    @Get('confirmados/:cod_dist')
    devolverconfirm(@Param('cod_dist') cod_dist: string) {
       const resp= this.bns.devolverConfirmadosDistrito(cod_dist)
       return resp;
    }
    @Get('confirmadosgeo/:cod_dist')
    devolverconfirmGeo(@Param('cod_dist') cod_dist: string) {
       const resp= this.bns.devolverConfirmadosDistritoHeat(cod_dist)
       return resp;
    }
    @Get('fallecidos/region')
    devolverFallecidosGeo() {
       const resp= this.bns.devolverDefuncionesRegion()
       return resp;
    }


}
