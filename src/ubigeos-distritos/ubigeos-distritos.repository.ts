import { EntityRepository, Repository } from "typeorm";
import { UbigeosDistritosEntity } from "src/entidades/ubigeos-distritos.entity";

@EntityRepository(UbigeosDistritosEntity)
export class UbigeosDistritosRepository extends Repository<UbigeosDistritosEntity>{}
