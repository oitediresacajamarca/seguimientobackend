import { EntityRepository, Repository } from "typeorm";
import { IpressCarteraEntity } from "../entidades/ipress-cartera-entity";

@EntityRepository(IpressCarteraEntity)
export class IpressCarteraRepository extends Repository<IpressCarteraEntity>{}
