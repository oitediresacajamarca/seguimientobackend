import { Controller, Get, Param, Post, Body } from '@nestjs/common';
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
    @Post('nueva')
    async nueva_solicitud(@Body() body) {      
    
        const soli = await this.solicitudes.guardarNuevaSolicitud(body)
        return soli;
    }
    @Post('derivar')
    async derivar_paciente(@Body() body) {      
   
        const soli = await this.solicitudes.derivar(body.ID_PACIENTE,body.derivaciones,body.solicitud)
        return soli;
    }

}
