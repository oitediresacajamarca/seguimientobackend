import { DiagnosticosEntity } from "src/entidades/diagnosticos.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(DiagnosticosEntity)
export class DiagnosticoRepository extends Repository<DiagnosticosEntity> {

}
