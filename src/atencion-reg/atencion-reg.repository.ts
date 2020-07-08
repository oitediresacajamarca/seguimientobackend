import { AtencionRegEntity } from "src/entidades/atencion-reg.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(AtencionRegEntity)
export class AtencionRegRepository extends Repository<AtencionRegEntity>{

    
}
