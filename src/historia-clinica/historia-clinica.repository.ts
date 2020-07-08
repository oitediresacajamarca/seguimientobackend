import { EntityRepository, Repository } from "typeorm";
import { HistoriaClinicaEntity } from "src/entidades/historia-clinica.entity";

@EntityRepository(HistoriaClinicaEntity)
export class HistoriaClinicaRepository extends Repository<HistoriaClinicaEntity>{

   
}
