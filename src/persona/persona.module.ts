import { Module } from '@nestjs/common';
import{TypeOrmModule} from '@nestjs/typeorm'
import { PersonaEntity } from 'src/entidades/persona.entity';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { PersonaRepository } from 'src/repositorios/persona.repository';

@Module({  imports:[TypeOrmModule.forFeature(
[PersonaRepository]

)], providers: [PersonaService], controllers: [PersonaController]})
export class PersonaModule {
  
}
