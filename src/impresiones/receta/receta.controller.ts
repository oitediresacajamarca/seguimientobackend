import { Controller, Post, Body, Res, Param, Get } from '@nestjs/common';
import { RecetaService } from './receta.service';
import { RelationCountAttribute } from 'typeorm/query-builder/relation-count/RelationCountAttribute';
var ipreportes = '172.18.20.30'
const client = require("jsreport-client")("http://" + ipreportes + ":8001/api/report")

@Controller('receta')
export class RecetaController {
    constructor(private recetas: RecetaService) {

    }

    @Post('ver')
    verFuat(@Body() Body, @Res() res) {


        client.render({
            template: { shortid: "Skx6N2hiAL" }, data: Body

        }).then((response) => {


            response.pipe(res)
        })
    }

    @Post('crear')
    async crearReceta(@Body() body) {
        const resp = await this.recetas.crearReceta(body)
        return resp;
    }
    @Get('ver/:ID_ATENCION')
    async ver(@Param() ID_ATENCION, @Res() res) {
        
        const resp = await this.recetas.devolverJsonReceta(ID_ATENCION.ID_ATENCION)
     
        client.render({
            template: { shortid: "Skx6N2hiAL" }, data: {receta:resp}

        }).then((response) => {
           response.pipe(res)
        })
    
    }

    async pdfReceta(data) {
       const render= await client.render({
            template: { shortid: "Skx6N2hiAL" }, data: data

        })
     
    }
}
