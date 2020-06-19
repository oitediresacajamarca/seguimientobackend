import { Controller, Get, Param, Res } from '@nestjs/common';
var sql=require('mssql')
const dotenv = require('dotenv');
dotenv.config();

@Controller('distribucion-administrativa')
export class DistribucionAdministrativaController {
    urlconect = process.env.url_database
    @Get('/ipress/:cod_ipress')
   async  geIpres(@Param() cod_ipress:any){
      
  sql.close();

        await sql.connect(this.urlconect)
        console.log(cod_ipress)

        const consulta=`select * from DISTRIBUCION_IPRESS where CODIGO_RENIPRESS like '${cod_ipress.cod_ipress}%' ;  `
            const result = await sql.query(consulta) 
            console.log(`select * from DISTRIBUCION_IPRESS where CODIGO_RENIPRESS like '${cod_ipress.cod_ipress}%'`)
            return result;
    }
}
