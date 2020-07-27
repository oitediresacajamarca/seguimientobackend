import { Repository, EntityRepository } from "typeorm";
import { DistribucionIpressEntity } from "src/entidades/distribucion-ipress-entity";

@EntityRepository(DistribucionIpressEntity)
export class DistribucionIpressRepository extends Repository<DistribucionIpressEntity> {}
