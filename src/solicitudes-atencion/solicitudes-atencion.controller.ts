import { Controller, Get, Param } from '@nestjs/common';
import { SolicitudesAtencionService } from './solicitudes-atencion.service';

@Controller('solicitudes-atencion')
export class SolicitudesAtencionController {
    constructor(private solicitudes: SolicitudesAtencionService) {

    }
    @Get('NRO_DOCUMENTO/:NRO_DOCUMENTO')
    async getNRO_DOCUMENTO(@Param() NRO_DOCUMENTO: any) {
        
    
        const soli = await this.solicitudes.buscarSolicitudDocumento(NRO_DOCUMENTO.NRO_DOCUMENTO)
        return soli;
    }

}
