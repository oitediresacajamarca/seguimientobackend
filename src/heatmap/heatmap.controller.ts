import { Controller, Get } from '@nestjs/common';
import { HeatmapRepository } from './heatmap.repository';
import { HeatmapService } from './heatmap.service';

@Controller('heatmap')
export class HeatmapController {
    constructor(private heatmaprep: HeatmapService) { }
    @Get('')
    async devolverHeat() {
        let rest = await this.heatmaprep.devolverConfirmadosRegion();
        return rest
    }

}
