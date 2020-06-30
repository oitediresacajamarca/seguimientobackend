import { Controller, Post, Body } from '@nestjs/common';
import { TratamientoService } from './tratamiento.service';

@Controller('tratamiento')
export class TratamientoController {
    constructor(private tratamientoser: TratamientoService) {

    }
    @Post('guardar')
    guardar(@Body() body) {
        console.log(body)
        this.tratamientoser.guardarTratamiento(body)

    }
}
