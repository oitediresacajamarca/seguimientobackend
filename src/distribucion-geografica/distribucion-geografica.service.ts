import { Injectable } from '@nestjs/common';
import { DistribucionGeograficaRepository } from './distribucion-geografica.repository';
import { Like } from 'typeorm';
import { identity } from 'rxjs';

@Injectable()
export class DistribucionGeograficaService {

    constructor(private distr: DistribucionGeograficaRepository) {


    }

    async getDistrito(ID_DISTRITO: any) {

        const dat = await this.distr.findOne({ where: { ID_DISTRITO: Like(ID_DISTRITO.cod_distrito+'%') } })

        return dat;

    }
}
