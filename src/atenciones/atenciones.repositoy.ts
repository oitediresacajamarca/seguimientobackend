import { EntityRepository, Repository } from "typeorm";
import { Atenciones } from "./atenciones.interface";
import { AtencionesEntity } from "src/entidades/atenciones.entity";

@EntityRepository(AtencionesEntity)
export class AtencionesRepositoy extends Repository<AtencionesEntity>{


}
