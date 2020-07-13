import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { PersonaEntity } from 'src/entidades/persona.entity';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { PersonaRepository } from 'src/repositorios/persona.repository';

import { DistribucionGeograficaModule } from 'src/distribucion-geografica/distribucion-geografica.module';
import { DistribucionGeograficaService } from 'src/distribucion-geografica/distribucion-geografica.service';
import { DistribucionGeograficaRepository } from 'src/distribucion-geografica/distribucion-geografica.repository';
import { PersonaDescripcionModule } from 'src/persona-descripcion/persona-descripcion.module';

@Module({
     imports: [TypeOrmModule.forFeature(
          [PersonaRepository,DistribucionGeograficaRepository]

     )], providers: [PersonaService], controllers: [PersonaController]
})
export class PersonaModule {

}
