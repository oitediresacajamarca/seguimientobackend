import { Injectable } from '@nestjs/common';
import { PersonaRepository } from 'src/repositorios/persona.repository';
import console = require('console');

@Injectable()
export class PersonaService {
    constructor(private personrep: PersonaRepository) {

    }
    async devolverOne(num_doc: string) {

        const persona = await this.personrep.findOne(num_doc)
        return persona;
    }
    async busquedaPersona(nombres: string, apellido_pat: string, apellido_mat: string) {
    const personas=  await  this.personrep.find({ where: "NOMBRES LIKE '%"+nombres+"%' AND APELLIDO_PAT LIKE '%"+apellido_pat+"%' and APELLIDO_MAT LIKE '%"+apellido_mat+"%'" })
    return personas
    }
    async actualizaDatosPersonales(numerodoc:string,nombres: string, apellido_pat: string, apellido_mat: string,DIRECCION:string) {
        const personas=  await  this.personrep.find({NRO_DOCUMENTO:numerodoc})
        console.log(personas)
        personas.forEach(element => {
           element.NOMBRES=nombres;
           element.APELLIDO_PAT=apellido_pat;
           element.APELLIDO_MAT=apellido_mat;
           element.DIRECCION=DIRECCION;
        
            this.personrep.save(element)
        });
        return personas
        }
    
}
