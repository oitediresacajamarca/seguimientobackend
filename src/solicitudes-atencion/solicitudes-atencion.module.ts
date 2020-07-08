import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudesAtencionRepository } from './solicitudes-atencion.repository';
import { SolicitudesAtencionService } from './solicitudes-atencion.service';
import { SolicitudesAtencionController } from './solicitudes-atencion.controller';
import { PersonaRepository } from 'src/repositorios/persona.repository';

@Module({
imports:[TypeOrmModule.forFeature([SolicitudesAtencionRepository,PersonaRepository])],
providers: [SolicitudesAtencionService],
controllers: [SolicitudesAtencionController]

})
export class SolicitudesAtencionModule {}
