import { MedicamentoEntity } from "src/entidades/medicamento.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(MedicamentoEntity)
export class MedicamentoRepository extends Repository<MedicamentoEntity>{}
