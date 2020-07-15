import { EntityRepository, Repository } from "typeorm";
import { AtencionDetalleEntidad } from "src/entidades/atencion-detalle-entidad";

@EntityRepository(AtencionDetalleEntidad)
export class AtencionDetalleEntidadRepository extends Repository<AtencionDetalleEntidad> {}

