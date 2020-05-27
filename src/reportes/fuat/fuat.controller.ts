import { Controller, Body, Post, Res, Get } from '@nestjs/common';

var request = require('request');
var ipreportes = '172.18.20.30'
//var ipreportes='localhost'
const client = require("jsreport-client")("http://" + ipreportes + ":8001")

@Controller('fuat')
export class FuatController {
    @Post('ver')
    verFuat(@Body() Body, @Res() res) {

        console.log(Body)

        /*
                 client.render({
                    template: {shortid:"rylAk_lPoL"},data: Body          
                   
                  }).then((response) => response.pipe(res))
        */


        client.render({
            template: { shortid: "Hkln5SQ3iL" }, data: Body

        }).then((response) => response.pipe(res))




    }

}
