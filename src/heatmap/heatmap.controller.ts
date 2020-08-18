import { Controller, Get } from '@nestjs/common';
import { HeatmapRepository } from './heatmap.repository';

@Controller('heatmap')
export class HeatmapController {
    constructor(private heatmaprep: HeatmapRepository) { }
    @Get('')
    async devolverHeat() {
        let rest = await this.heatmaprep.find();
        return rest
    }

}
