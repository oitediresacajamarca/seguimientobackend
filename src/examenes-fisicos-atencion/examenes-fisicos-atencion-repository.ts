import { EntityRepository, Repository } from "typeorm";
import { ExamenesFisicosAtencionEntity } from "src/entidades/examenes-fisicos-atencion";

@EntityRepository(ExamenesFisicosAtencionEntity)
export class ExamenesFisicosAtencionRepository extends Repository<ExamenesFisicosAtencionEntity>{}
