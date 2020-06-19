import { Injectable } from '@nestjs/common';
var mssq = require('mssql');

@Injectable()
export class ProfesionService {
    urlconect = process.env.url_database
    async  listarProfesion() {
        mssq.close();
        await mssq.connect(this.urlconect)
        const consulta = `select * from PROFESION   `
        const result = await mssq.query(consulta)

        return result;

    }


}
