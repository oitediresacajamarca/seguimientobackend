import { Controller, Body, Post, Res, Get, HttpStatus } from '@nestjs/common';
import { FuatService } from './fuat.service';
import { Fuat } from '../fuat.interface';

var request = require('request');
var ipreportes = '172.18.20.30'
//var ipreportes='localhost'
const client = require("jsreport-client")("http://" + ipreportes + ":8001")

@Controller('fuat')
export class FuatController {

    constructor(private fus:FuatService){

    }
    @Post('ver')
    verFuat(@Body() Body, @Res() res) { 
      
        client.render({
            template: { shortid: "Hkln5SQ3iL" }, data: Body

        }).then((response) => response.pipe(res))

    }
    @Get('generarid')
    async  generarId(@Res() respon):Promise<Fuat>{
     
    const res= await this.fus.devuelveId();
    return respon.status(HttpStatus.OK).json({  respuesta: res })
    }

}
 