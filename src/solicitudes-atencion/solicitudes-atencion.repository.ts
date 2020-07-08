import { EntityRepository, Repository } from "typeorm";
import { SolicitudesAtencionEntity } from "src/entidades/solicitudes-atencion.entity";

@EntityRepository(SolicitudesAtencionEntity)
export class SolicitudesAtencionRepository  extends Repository<SolicitudesAtencionEntity>{}
