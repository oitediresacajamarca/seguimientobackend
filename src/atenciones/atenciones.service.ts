import { Injectable } from '@nestjs/common';
import { AtencionesRepositoy } from './atenciones.repositoy';
import { PersonaRepository } from 'src/repositorios/persona.repository';
import console = require('console');
import { MoreThan, getRepository, LessThan,Not, IsNull ,MoreThanOrEqual,LessThanOrEqual, Between} from 'typeorm'
import { AtencionesEntity } from 'src/entidades/atenciones.entity';
import { Console } from 'console';

@Injectable()
export class AtencionesService {

    constructor(private atenrep: AtencionesRepositoy, private personas: PersonaRepository) {

    }


    async devolverAtencionesPersona(id_persona: number): Promise<any> {
        const respuesta = await this.atenrep.find({ ID_PACIENTE: id_persona })
        var atenciones = []

        return respuesta


    }
    async devolverAtencionesFiltrar(desde: Date, hasta: Date): Promise<any> {
        console.log(desde)

        const respuesta = await getRepository(AtencionesEntity).find({ where: { FECHA: Between(desde,hasta),ID_PACIENTE:Not(IsNull() )} })
        console.log(respuesta)
        return respuesta


    }


}
