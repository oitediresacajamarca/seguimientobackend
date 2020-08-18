import { Injectable } from '@nestjs/common';
import { CpmsFullRepository } from './cpms-full.repository';
import { Like } from 'typeorm';

@Injectable()
export class CpmsFullService {
    constructor(private cpmsservice: CpmsFullRepository) {

    }
    async devolverCPMS(cad_buscar) {
     let result=await   this.cpmsservice.find({ where: {NOMBRE_CPMS: Like('%'+cad_buscar+'%') } })
     return result;
    }
}
