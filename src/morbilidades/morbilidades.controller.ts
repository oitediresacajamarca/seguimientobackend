import { Controller, Param, Get, Res, HttpStatus } from '@nestjs/common';
var mssql = require('mssql')
@Controller('morbilidades')
export class MorbilidadesController {
    cadena_conexion=process.env.url_database

    @Get('/:ID_PACIENTE')
    async devolver(@Param('ID_PACIENTE') ID_PACIENTE:string ,@Res() res) {

        

        mssql.close();
        await mssql.connect(this.cadena_conexion)

        const consulta = `SELECT  [NRO_DOCUMENTO]
        ,[ID_CIE]
        ,[ID_MEDICAMENTO]
        ,[OBSERVACION]
        ,[FEC_REGISTRO]
        ,[Descripcion_Item]
        ,[NOMBRE_MEDICAMENTO]
        ,[ID_PACIENTE]
    FROM [MORBILIDAD_PACIENTE_DESCRIPCION]
    where ID_PACIENTE=${ID_PACIENTE}  ; `

        const result = await mssql.query(consulta)

        return res.status(HttpStatus.OK).json({respuesta: result.recordset})
    };
}
