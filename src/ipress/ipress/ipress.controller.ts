import { Controller, Get, Param } from '@nestjs/common';
import { IpressService } from './ipress.service';

@Controller('ipress')
export class IpressController {

    constructor(private ipress: IpressService) {

    }
    @Get(':cod_ipress')
    async devolverIpress(@Param() cod_ipres) {
      
        const resp = await this.ipress.devolverIpress(cod_ipres.cod_ipress);
        return resp;
    }
    @Get('distrito/:ID_DISTRITO')
    async devolverIpressPorDistrito(@Param() ID_DISTRITO) {
      
        const resp = await this.ipress.devolverIpressPorDistrito(ID_DISTRITO.ID_DISTRITO);
        return resp;
    }
}
