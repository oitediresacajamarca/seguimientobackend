import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto'
import { UsuariosService } from './usuarios.service';

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


        return res.status(HttpStatus.OK).json({ mensaje: mires.mensaje, respuesta: re })

    }

}
