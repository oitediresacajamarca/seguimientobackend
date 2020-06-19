import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
var mssql = require('mssql')

@Controller('personal')
export class PersonalController {
    cadena_conexion = process.env.url_database
   
    @Get(':id/:ipress')
    async devolverCodigoTrabajadorIpress(@Param('id') id, @Param('ipress') ipress, @Res() res) {
        let respuesta: any;
        let identiti
        mssql.close();
        await mssql.connect(this.cadena_conexion)
        const consulta = `SELECT *
        FROM [TRABAJADOR_IPRESS]
        WHERE ID_PERSONA = ${id}; `
        console.log(consulta);
        const result = await mssql.query(consulta)
        console.log(result)
        console.log('ddf')
        if (result.recordset.length > 0) {
            let resulfi = result.recordset.filter(element =>
                element.ID_IPRESS == ipress
            );

            if (resulfi.length > 0) {
                respuesta = resulfi[0]
            }
            else {
                console.log("no encontro")


                const actualizacon = `insert into TRABAJADOR_IPRESS(ID_PERSONA,ID_IPRESS) values(${id},'${ipress}') ; `

                const actualiza = await mssql.query(actualizacon)
                const consulta2 = `SELECT *
                FROM [TRABAJADOR_IPRESS]
                WHERE ID_PERSONA = ${id}  and ID_IPRESS= '${ipress}'; `

                const result = await mssql.query(consulta2)
                respuesta = result.recordset[0];
            }
        }
        else {
            console.log("no encontro")

            const actualizacon = `insert into TRABAJADOR_IPRESS(ID_PERSONA,ID_IPRESS) values(${id},'${ipress}') ; `

            const actualiza = await mssql.query(actualizacon)
            const consulta2 = `SELECT *
            FROM [TRABAJADOR_IPRESS]
            WHERE ID_PERSONA = ${id}  and ID_IPRESS= '${ipress}'; `

            const result = await mssql.query(consulta2)
            respuesta = result.recordset[0];

        }

        return res.status(HttpStatus.OK).json({ recordset: [respuesta], rowsAffected: 1, respuesta: { identiti: identiti } })
    }
}
