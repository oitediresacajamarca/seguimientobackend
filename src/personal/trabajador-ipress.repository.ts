import { Repository, EntityRepository } from "typeorm";
import { TrabajadorIpressEntity } from "src/entidades/trabajador-ipress.entity";

@EntityRepository(TrabajadorIpressEntity)
export class TrabajadorIpressRepository extends Repository<TrabajadorIpressEntity> {}
