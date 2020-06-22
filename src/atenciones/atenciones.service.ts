import { Injectable } from '@nestjs/common';
import { AtencionesRepositoy } from './atenciones.repositoy';
import { PersonaRepository } from 'src/repositorios/persona.repository';
import console = require('console');

@Injectable()
export class AtencionesService {

    constructor(private atenrep: AtencionesRepositoy, private personas: PersonaRepository) {



    }


    async devolverAtencionesPersona(id_persona: number): Promise<any>{
        const respuesta = await this.atenrep.find({ ID_PACIENTE: id_persona })
        var atenciones = []

        return respuesta
      
       
     

    }

}
