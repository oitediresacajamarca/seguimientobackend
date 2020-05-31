import { Injectable } from '@nestjs/common';
var mssq = require('mssql');

@Injectable()
export class ProfesionService {

    async  listarProfesion() {
        mssq.close();
        await mssq.connect('mssql://sa:.@localhost/risc_2030')
        const consulta = `select * from PROFESION   `
        const result = await mssq.query(consulta)

        return result;

    }


}
