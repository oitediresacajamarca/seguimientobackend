import { Controller, Post, Body, Res, HttpStatus, Get, Param, Put } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto'
import { UsuariosService } from './usuarios.service';
var ngfaker = require('ng-faker');

@Controller('usuarios')
export class UsuariosController {
    constructor(private usua: UsuariosService) {

    }
    @Post('')
    async login(@Body() login: LoginDto, @Res() res) {


        let re: any = await this.usua.loguear(login.root.username, login.root.clave)
        re.logueado = "TRUE";
        return res.status(HttpStatus.OK).json({ bien: "bien", respuesta: re })

    }

    @Post('login')
    async loging(@Body() login: LoginDto, @Res() res) {


        console.log(login)
        let re: any = await this.usua.loguearyambito(login.root.username, login.root.clave, login.root.peso)

        return res.status(HttpStatus.OK).json({ bien: "bien", respuesta: re })

    }
    @Post('/verifica')
    async verifica(@Body() body: any, @Res() res) {





        let mires: any = {};

        let re: any = await this.usua.verificarusario(body.username)
        if (re == null) {
            mires.mensaje = "No Existe"

        }
        else {
            mires.mensaje = "Existe"
        }


        return res.status(HttpStatus.OK).json({ mensaje: mires.mensaje, respuesta: re })

    }

    @Post('/nuevo')
    async nuevo(@Body() body: any, @Res() res) {

        let mires: any = {};

        let re: any = await this.usua.nuevo(body)
        if (re == null) {
            mires.mensaje = "No Existe"

        }
        else {
            mires.mensaje = "Existe"
        }
        console.log(body)

        return res.status(HttpStatus.OK).json({ mensaje: mires.mensaje, respuesta: re })

    }
    @Get('generarFake')

    async genrarFake(@Res() res) {

        var randomName = ngfaker.name.firstName()
        console.log(randomName);
        return res.status(HttpStatus.OK).json(randomName);

    }
    @Get('listar')
    async listar_usuarios() {
        const res = await this.usua.listar_usuarios()
        return res;
    }
    @Post('listarporambito')
    async listar_usuarios_ambito(@Body() ambito ) {
        console.log(ambito)
        const res = await this.usua.listar_usuarios_ambito(ambito.peso,ambito.peso_sup)
        return res;
    }
    @Get('eliminar/:id')
        async eliminar_usuario(@Param() id: any) {

        console.log(id)
        const res = await this.usua.eliminar_usuario(id.id);
        return res;

    }
    @Get('usuapidp/:id_persona')
    async devolverUsuario() {


    }
    @Put('actualizarP/:id_persona')
    async actualizarUsuario(@Param('id_persona') id_persona: number, @Body() body) {
        const res = await this.usua.actualizar_usuario(id_persona,body)
        return res;

    }

}
