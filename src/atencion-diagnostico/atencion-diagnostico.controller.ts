import { Controller, Post, Body } from '@nestjs/common';
import { AtencionDiagnosticoService } from './atencion-diagnostico.service';

@Controller('atencion-diagnostico')
export class AtencionDiagnosticoController {
    constructor(private ates: AtencionDiagnosticoService) { }
    @Post('guardardiagnosticos')
    async guardarDiagnosticos(@Body() body) {
      
        const resp = await this.ates.guardarDiagnosticos(body)
        return resp;
    }
}
