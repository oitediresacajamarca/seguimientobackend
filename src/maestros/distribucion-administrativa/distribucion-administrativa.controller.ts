import { Controller, Get, Param, Res } from '@nestjs/common';
var sql=require('mssql')

@Controller('distribucion-administrativa')
export class DistribucionAdministrativaController {

    @Get('/ipress/:cod_ipress')
   async  geIpres(@Param() cod_ipress:any){
      
  sql.close();

        await sql.connect('mssql://sa:.@localhost/risc_2030')
        console.log(cod_ipress)

        const consulta=`select * from DISTRIBUCION_IPRESS where CODIGO_RENIPRESS like '${cod_ipress.cod_ipress}%' ;  `
            const result = await sql.query(consulta) 
            console.log(`select * from DISTRIBUCION_IPRESS where CODIGO_RENIPRESS like '${cod_ipress.cod_ipress}%'`)
            return result;
    }
}
