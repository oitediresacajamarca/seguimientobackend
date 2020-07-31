import { Controller, Get, Param } from '@nestjs/common';
import { IpressCarteraService } from './ipress-cartera.service';

@Controller('ipress-cartera')
export class IpressCarteraController {
    constructor(private ipresss: IpressCarteraService) {

    }
    @Get('ipress/:COD_IPRESS')
    async servicios_ipress(@Param() COD_IPRESS) {
      
        const resp = await this.ipresss.fitrar_cartera_ipress(COD_IPRESS.COD_IPRESS);
        return resp
    }
}
