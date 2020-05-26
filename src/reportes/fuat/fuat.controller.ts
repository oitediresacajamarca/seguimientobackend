import { Controller, Body, Post, Res, Get } from '@nestjs/common';

var request =require('request');
const client = require("jsreport-client")("http://localhost:8001")

@Controller('fuat')
export class FuatController {
    @Get('ver')
    verFuat(@Body() Body,@Res() res){
   

         client.render({
            template: {"shortid":"rylAk_lPoL"},options:{preview:true},"data": Body          
           
          }).then((response) => response.pipe(res))
           

      
    }

}
