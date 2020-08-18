import { EntityRepository, Repository } from "typeorm";
import { Heatmap } from "src/entidades/heatmap";

@EntityRepository(Heatmap)
export class HeatmapRepository extends Repository<Heatmap>{

}
