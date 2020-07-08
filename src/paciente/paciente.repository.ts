import { EntityRepository, Repository } from "typeorm";
import { Paciente } from "src/entidades/paciente";

@EntityRepository(Paciente)
export class PacienteRepository  extends Repository<Paciente>{}
