import { EntityRepository, Repository } from "typeorm";
import { UpssEntity } from "src/entidades/upss.entity";

@EntityRepository(UpssEntity)
export class UpssRepository extends Repository<UpssEntity>{}
