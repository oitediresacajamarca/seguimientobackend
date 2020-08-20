import { Module } from '@nestjs/common';
import { BaseNotiService } from './base-noti.service';
import { BaseNotiController } from './base-noti.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseNotiReprository } from './base-noti.reprository';
import { HeatmapRepository } from 'src/heatmap/heatmap.repository';
import { UbigeosDistritosService } from 'src/ubigeos-distritos/ubigeos-distritos.service';
import { UbigeosDistritosRepository } from 'src/ubigeos-distritos/ubigeos-distritos.repository';

@Module({
  providers: [BaseNotiService],
  controllers: [BaseNotiController],
  imports:[TypeOrmModule.forFeature([BaseNotiReprository,HeatmapRepository,UbigeosDistritosRepository])]
})
export class BaseNotiModule {}
