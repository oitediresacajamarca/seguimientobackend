import { EntityRepository, Repository } from "typeorm";
import { CarteraServicioEntity } from "src/entidades/cartera-servicio.entity";

@EntityRepository(CarteraServicioEntity)
export class CarteraServicioRepository extends Repository<CarteraServicioEntity> {}
