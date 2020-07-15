import { Controller, Body, Post, Res, Get, HttpStatus, Param} from '@nestjs/common';
import { FuatService } from './fuat.service';
import { Fuat } from '../fuat.interface';



var ipreportes = '172.18.20.30'
//var ipreportes='localhost'
const client = require("jsreport-client")("http://" + ipreportes + ":8001/api/report")

@Controller('fuat')
export class FuatController {

    constructor(private fus: FuatService) {

    }
    @Post('ver')
    verFuat(@Body() Body, @Res() res) {

    
        client.render({
            template: { shortid:"Hkln5SQ3iL" }, data: Body

        }).then((response) => response.pipe(res))


    }
    @Post('guardar')
    async guardar(@Body() body) {
    
        const res = await this.fus.crearFuat(body);
        return res;
    }



    @Get('generarid')
    async generarId(@Res() respon): Promise<Fuat> {

        const res = await this.fus.devuelveId();
        return respon.status(HttpStatus.OK).json({ respuesta: res })
    }
    @Get('devolverfuat/:cod_fuat')
    async devolverfuat(@Param() cod_fuat){
       
     const res=await this.fus.devolverFuat(cod_fuat.cod_fuat)  
     return res
    }
    @Get('fuatJsonBase/:ID_ATENCION')
    async devolverDatosJsonFuatBase(@Param() ID_ATENCION){
       
        const res=await this.fus.devolverFuat(ID_ATENCION.ID_ATENCION)  
        return res
       }


}
