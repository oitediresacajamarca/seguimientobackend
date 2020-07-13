import { Controller, Post, Body } from '@nestjs/common';
import { TratamientoService } from './tratamiento.service';

@Controller('tratamiento')
export class TratamientoController {
    constructor(private tratamientoser: TratamientoService) {

    }
    @Post('guardar')
    async guardar(@Body() body) {
     
        const respuesta = await this.tratamientoser.guardarTratamiento(body)
        return respuesta
    }
}
