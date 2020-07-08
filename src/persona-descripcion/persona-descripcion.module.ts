import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaDescripcionRepository } from './persona-descripcion.repository';
import { PersonaDescripcionController } from './persona-descripcion.controller';
import { PersonaDescripcionService } from './persona-descripcion.service';

@Module({
    imports:[TypeOrmModule.forFeature([PersonaDescripcionRepository])],
    controllers: [PersonaDescripcionController],
    providers: [PersonaDescripcionService]
})
export class PersonaDescripcionModule {}
