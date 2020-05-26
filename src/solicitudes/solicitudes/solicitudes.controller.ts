import { Controller, Param, Get, Res, HttpStatus } from '@nestjs/common';
const sql = require('mssql')

@Controller('solicitudes')
export class SolicitudesController {
   
@Get('/:cod_busqueda')
 async devolverSolicitudes(@Param() cod_busqueda){
    sql.close()

    await sql.connect('mssql://sa:.@localhost/risc_2030')
    const consulta=`select * from SOLICITUDES_SEGUIMIENTO where cod_busqueda like '${cod_busqueda.cod_busqueda}%' ;
`
    const result = await sql.query(consulta) 
    console.log(`select * from SOLICITUDES_SEGUIMIENTO where cod_busqueda like '${cod_busqueda.cod_busqueda}%'`)
    return result;
}


}
