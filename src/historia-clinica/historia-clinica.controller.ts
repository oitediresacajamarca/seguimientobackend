import { Controller, Get, Param, Body } from '@nestjs/common';
import { HistoriaClinicaRepository } from './historia-clinica.repository';

@Controller('historia-clinica')
export class HistoriaClinicaController {
    constructor(private hisrep: HistoriaClinicaRepository) { }

    @Get('crear_historia/:NRO_DOCUMENTO')
    async generaHistoriaClinica(@Param() NRO_DOCUMENTO: string, @Body() body) {
        const rest = await this.hisrep.create({
            NRO_HCL: NRO_DOCUMENTO,
            ARCHIVO_CLINICO: '',
            TIPO_HC: 1,
            ID_PACIENTE: 1,
            COD_IPRESS: '',
            ESTADO_HC: 1,
            FEC_REGISTRO: '2014-12-08'
        })
    }
}
