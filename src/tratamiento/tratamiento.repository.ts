import { TratamientoEntity } from "src/entidades/tratamiento.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(TratamientoEntity)
export class TratamientoRepository extends Repository<TratamientoEntity> {}
