import { Controller, Param, Get, Res, HttpStatus } from '@nestjs/common';
const sql = require('mssql')

@Controller('solicitudes')
export class SolicitudesController {
    urlconect='mssql://sa:.@localhost/risc_2030'
   
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
@Get('buscarSolicitud/:cod_busqueda')
async devolverSolicitud(@Param() cod_busqueda){
    sql.close()

    await sql.connect(this.urlconect)
    const consulta=`select * from SOLICITUDES_SEGUIMIENTO where ID_SOLICITUD =${cod_busqueda.cod_busqueda} ;
`
    const result = await sql.query(consulta) 
   
    return result;
}


}
