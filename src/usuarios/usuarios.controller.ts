import { Controller, Post, Body, Res, HttpStatus, Get, Param } from '@nestjs/common';
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

    async genrarFake() {

        var randomName = ngfaker.name.firstName()
        console.log(randomName);
        return randomName;

    }
    @Get('listar')
    async   listar_usuarios() {
        const res = await this.usua.listar_usuarios()
        return res;
    }
    @Get('eliminar/:id')
    async eliminar_usuario(@Param() id: any) {

        console.log(id)
        const res = await this.usua.eliminar_usuario(id.id);
        return res;

    }

}
