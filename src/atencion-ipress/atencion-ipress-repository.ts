import { EntityRepository, Repository } from "typeorm";
import { AtencionIpressEntity } from "src/entidades/atencion-ipress.entity";

@EntityRepository(AtencionIpressEntity)
export class AtencionIpressRepository extends Repository<AtencionIpressEntity>{


    
}