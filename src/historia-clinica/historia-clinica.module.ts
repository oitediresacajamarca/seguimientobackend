import { Module } from '@nestjs/common';
import { HistoriaClinicaController } from './historia-clinica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoriaClinicaEntity } from 'src/entidades/historia-clinica.entity';
import { HistoriaClinicaRepository } from './historia-clinica.repository';

@Module({
  imports:[TypeOrmModule.forFeature([HistoriaClinicaRepository])],
  controllers: [HistoriaClinicaController]
})
export class HistoriaClinicaModule {}
