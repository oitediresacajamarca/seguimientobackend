import { Controller, Post, Body } from '@nestjs/common';
import { AtencionRegService } from './atencion-reg.service';


@Controller('atencion-reg')
export class AtencionRegController {
    constructor(private atencionregser: AtencionRegService) {

    }
    @Post('guardar')
    async guardar(@Body() Body) {
        console.log(Body)
        const respuesta = await this.atencionregser.guardarAtencionRegRep(Body);
        return respuesta
    }

}
