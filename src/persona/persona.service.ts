import { Injectable } from '@nestjs/common';
import { PersonaRepository } from 'src/repositorios/persona.repository';
import console = require('console');
import { DistribucionGeograficaService } from 'src/distribucion-geografica/distribucion-geografica.service';
import { DistribucionGeograficaRepository } from 'src/distribucion-geografica/distribucion-geografica.repository';

@Injectable()
export class PersonaService {
    constructor(private personrep: PersonaRepository, private geos: DistribucionGeograficaRepository) {

    }
    async devolverPersonaPorDocumento(NRO_DOCUMENTO:string,TIPO_DOC:string){
        const persona = await this.personrep.findOne({NRO_DOCUMENTO:NRO_DOCUMENTO})
        return persona;
    }
    async devolverOne(num_doc: string) {

        const persona = await this.personrep.findOne(num_doc)
        return persona;
    }
    async busquedaPersona(nombres: string, apellido_pat: string, apellido_mat: string) {
        const personas = await this.personrep.find({ where: "NOMBRES LIKE '%" + nombres + "%' AND APELLIDO_PAT LIKE '%" + apellido_pat + "%' and APELLIDO_MAT LIKE '%" + apellido_mat + "%'" })
        return personas
    }
    async actualizaDatosPersonales(numerodoc: string, nombres: string, apellido_pat: string, apellido_mat: string, DIRECCION: string) {
        const personas = await this.personrep.find({ NRO_DOCUMENTO: numerodoc })

        personas.forEach(element => {
            element.NOMBRES = nombres;
            element.APELLIDO_PAT = apellido_pat;
            element.APELLIDO_MAT = apellido_mat;
            element.DIRECCION = DIRECCION;

            this.personrep.save(element)
        });
        return personas
    }
    async devolverPersonaDescripcion(NRO_DOCUMENTO: string) {
        
        const persona = await this.personrep.findOne({ NRO_DOCUMENTO: NRO_DOCUMENTO })
        console.log(persona)
        let dto: any = {}
        dto = persona;

        if (persona.ID_GENERO == 1) {
            dto.GENERO = "MASCULINO"
        } else {
            dto.GENERO = "FEMENINO"
        }
        
        const dist = await this.geos.findOne({ID_DISTRITO:persona.ID_DISTRITO})
        if(dist!=null){
            dto.NOMBRE_DISTRITO = dist.NOMBRE_DISTRITO;
            dto.NOMBRE_PROVINCIA = dist.NOMBRE_PROVINCIA;
        }else{
            dto.NOMBRE_DISTRITO="no hay datos"
            dto.NOMBRE_PROVINCIA="no hay datos"
        }
       

        return dto;


    }

}
