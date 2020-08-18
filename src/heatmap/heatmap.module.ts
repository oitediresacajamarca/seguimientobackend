import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { heatmapschema } from './heatmap.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeatmapController } from './heatmap.controller';
import { HeatmapRepository } from './heatmap.repository';

@Module({
    imports:[ MongooseModule.forFeature([{ name:'heatmap',schema:heatmapschema}]),TypeOrmModule.forFeature([HeatmapRepository])],
    controllers: [HeatmapController]
})
export class HeatmapModule {}
