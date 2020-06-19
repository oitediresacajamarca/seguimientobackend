import { Injectable } from '@nestjs/common';
import { AtencionesRepositoy } from './atenciones.repositoy';

@Injectable()
export class AtencionesService {

    constructor(private atenrep: AtencionesRepositoy) {



    }


    async devolverAtencionesPersona(id_persona: number) {
    const respuesta= await   this.atenrep.find()
    return respuesta;
    }

}
