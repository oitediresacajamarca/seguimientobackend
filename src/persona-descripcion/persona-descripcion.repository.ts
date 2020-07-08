import { EntityRepository, Repository } from "typeorm";
import { PersonaDescripcionEntity } from "src/entidades/persona-descripcion.entity";

@EntityRepository(PersonaDescripcionEntity)
export class PersonaDescripcionRepository extends Repository<PersonaDescripcionEntity>{
    
}
