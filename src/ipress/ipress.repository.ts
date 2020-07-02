import { EntityRepository, Repository } from "typeorm";
import { Ipress } from "src/entidades/ipress";

@EntityRepository(Ipress)
export class IpressRepository extends Repository<Ipress>{}
