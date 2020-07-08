import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteRepository } from './paciente.repository';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { HistoriaClinicaRepository } from 'src/historia-clinica/historia-clinica.repository';

@Module({
    imports:[TypeOrmModule.forFeature([PacienteRepository,HistoriaClinicaRepository])],
    providers: [PacienteService],
    controllers: [PacienteController]
})
export class PacienteModule {}
