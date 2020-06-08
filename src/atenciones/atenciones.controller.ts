import { Controller, Post, Body, Param, Get } from '@nestjs/common';
var mssql = require('mssql')
var cadena_conexion = 'mssql://sa:.@localhost/risc_2030'


@Controller('atenciones')
export class AtencionesController {

    @Post('/registrar')
    async  registrar(@Body() nuevaaatencion) {
        console.log(nuevaaatencion)
        mssql.close();
        let consulta = await mssql.connect('mssql://sa:.@localhost/risc_2030')
        let insert = `

                INSERT INTO [dbo].[ATENCION]
                        (
                        [ID_MODALIDAD]
                        ,[ID_HC]
                        ,[ID_TIPO_ATENCION]
                        ,[ID_RESPONSABLE]
                        ,[FECHA]
                        ,[HORA]
                        ,[ANTECEDENTE]
                        ,[FEC_REGISTRO]
                        ,[NIVEL_ATENCION]
                        ,[CONSENTIMIENTO]
                        ,[ID_PACIENTE]
                        ,[ID_SOLICITUD])
                    VALUES
                        (
                        ${nuevaaatencion.ID_MODALIDAD}
                        ,${nuevaaatencion.ID_HC}
                        ,${nuevaaatencion.ID_TIPO_ATENCION}
                        ,${nuevaaatencion.ID_RESPONSABLE}
                        ,${nuevaaatencion.FECHA}
                        ,${nuevaaatencion.HORA}
                        ,'${nuevaaatencion.ANTECEDENTE}'
                        ,${nuevaaatencion.FEC_REGISTRO}
                        ,${nuevaaatencion.NIVEL_ATENCION}
                        ,${nuevaaatencion.CONSENTIMIENTO}
                        ,${nuevaaatencion.ID_PACIENTE}
                        ,${nuevaaatencion.ID_SOLICITUD})
                `
        console.log(insert)

        const result = await mssql.query(insert)
        let identiti
        identiti = await mssql.query('select @@identity as identiti')

        result.identiti = identiti.recordset[0].identiti
        await mssql.query(`Update [SOLICITUD_PACIENTE] set ESTADO= 'A' WHERE ID_SOLICITUD=${nuevaaatencion.ID_SOLICITUD}`)

        console.log(result)

        return result

    }


    @Get('/atencionesrealizadas/:id_persona')
    async  atenciones_realisadas(@Body() nuevaaatencion, @Param('id_persona') id_persona) {
        console.log(nuevaaatencion)
        mssql.close();
        await mssql.connect(cadena_conexion)
        let insert = `
                        SELECT [ANTECEDENTE]
                        ,[NOMBRES]
                        ,[APELLIDO_PAT]
                        ,[APELLIDO_MAT]
                        ,[NRO_DOCUMENTO]
                        ,[FECHA_NAC]
                        ,[TELEFONO]
                        ,[DESCRIPCION]
                        ,[N_CONTROL]
                        ,[TRATAMIENTO_ACTUAL]
                        ,[ID_PERSONA]
                    FROM [risc_2030].[dbo].[ATENCIONES_REALIZADAS]
                    where  ID_PERSONA_PROFESIONAL=${id_persona}
                `

        const result = await mssql.query(insert)

        console.log(insert)

        return result

    }
    @Get('/atencionesrealizadas_detalle/:id_atencion')
    async  atencionesrealizadas_detalle(@Body() nuevaaatencion, @Param('id_atencion') id_atencion) {
        console.log(nuevaaatencion)
        mssql.close();
        await mssql.connect(cadena_conexion)
        let insert = `
      
        SELECT [CODIGO_DIAGNOSTICO]
              ,[TIPO_DIAGNOSTICO]
              ,[LAB_DIAGNOSTICO]
              ,[ESTADO_DIAGNOSTICO]
              ,[NOMBRE_TIPO_DIAGNOSTICO]
              ,[ID_ATENCION]
          FROM [risc_2030].[dbo].[ATENCIONES_REALIZADAS_DETALLE]
                    where  ID_ATENCION=${id_atencion}
                `

        const result = await mssql.query(insert)

        console.log(insert)

        return result

    }

}
