import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { PersonaService } from './persona.service';


@Controller('persona')
export class PersonaController {
    constructor(private personaser: PersonaService) {

    }
    @Get(':NRO_DOCUMENTO')
    async getOne(@Param() NRO_DOCUMENTO: string) {
        const uno = await this.personaser.devolverOne(NRO_DOCUMENTO);
        return uno;
    }
    @Post('busqueda')
    async getPersona(@Body() body) {

        const uno = await this.personaser.busquedaPersona(body.NOMBRES, body.APELLIDO_PAT, body.APELLIDO_MAT);
        return uno;
    }
    @Post('actualiza/:NRO_DOCUMENTO')
    async actualizaPersona(@Body() body, @Param() NRO_DOCUMENTO) {

        const uno = await this.personaser.actualizaDatosPersonales(NRO_DOCUMENTO.NRO_DOCUMENTO, body.NOMBRES, body.APELLIDO_PAT, body.APELLIDO_MAT, body.DIRECCION);
        return uno;
    }

    @Get('persona-descripcion/:NRO_DOCUMENTO')
    async getPersonaDescripcion(@Param() NRO_DOCUMENTO) {
        const uno = await this.personaser.devolverPersonaDescripcion(NRO_DOCUMENTO.NRO_DOCUMENTO)
        return uno;
    }
    @Get('TIPO_DOC/:TIPO_DOC/NRO_DOCUMENTO/:NRO_DOCUMENTO')
    async getPersonaPorDocumento(@Param() NRO_DOCUMENTO,@Param() TIPO_DOC ) {
        console.log(TIPO_DOC)
        const uno = await this.personaser.devolverPersonaPorDocumento(NRO_DOCUMENTO.NRO_DOCUMENTO,TIPO_DOC)
        return uno;
    }



}
