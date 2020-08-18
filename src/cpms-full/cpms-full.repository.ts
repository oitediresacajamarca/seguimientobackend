import { EntityRepository, Repository } from "typeorm";
import { CpmsFullEntity } from "src/entidades/cpms-full.entity";

@EntityRepository(CpmsFullEntity)
export class CpmsFullRepository extends Repository<CpmsFullEntity> {}
