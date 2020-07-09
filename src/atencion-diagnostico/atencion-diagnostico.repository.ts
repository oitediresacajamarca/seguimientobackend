import { EntityRepository, Repository } from "typeorm";
import { AtencionDiagnosticoEntity } from "src/entidades/atencion-diagnostico.entity";

@EntityRepository(AtencionDiagnosticoEntity)
export class AtencionDiagnosticoRepository extends Repository<AtencionDiagnosticoEntity>{}
