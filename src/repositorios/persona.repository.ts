import { EntityRepository, Repository } from "typeorm";
import { PersonaEntity } from "src/entidades/persona.entity";

@EntityRepository(PersonaEntity)
export class PersonaRepository extends Repository<PersonaEntity>{


}
