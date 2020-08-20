import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { heatmapschema } from './heatmap.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeatmapController } from './heatmap.controller';
import { HeatmapRepository } from './heatmap.repository';
import { HeatmapService } from './heatmap.service';
import { UbigeosDistritosRepository } from 'src/ubigeos-distritos/ubigeos-distritos.repository';
import { BaseNotiReprository } from 'src/base-noti/base-noti.reprository';

@Module({
    imports:[ MongooseModule.forFeature([{ name:'heatmap',schema:heatmapschema}]),
    TypeOrmModule.forFeature([HeatmapRepository,UbigeosDistritosRepository,BaseNotiReprository])],
    controllers: [HeatmapController],
    providers: [HeatmapService]
})
export class HeatmapModule {}
