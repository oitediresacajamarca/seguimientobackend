import { EntityRepository, Repository } from "typeorm";
import { DistribucionGeograficaEntity } from "src/entidades/distribucion-geografica.entity";

@EntityRepository(DistribucionGeograficaEntity)
export class DistribucionGeograficaRepository  extends Repository<DistribucionGeograficaEntity>{


    
}
