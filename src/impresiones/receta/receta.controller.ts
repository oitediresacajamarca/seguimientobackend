import { Controller, Post, Body, Res } from '@nestjs/common';
var ipreportes = '172.18.20.30'
const client = require("jsreport-client")("http://" + ipreportes + ":8001/api/report")

@Controller('receta')
export class RecetaController {


    @Post('ver')
    verFuat(@Body() Body, @Res() res) {

     
        client.render({
            template: { shortid: "Skx6N2hiAL" }, data: Body

        }).then((response) => {
          

            response.pipe(res)
        })
    }

}