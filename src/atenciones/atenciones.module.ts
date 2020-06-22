import { Module } from '@nestjs/common';
import { AtencionesController } from './atenciones.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AtencionesRepositoy } from './atenciones.repositoy';
import { AtencionesService } from './atenciones.service';
import { PersonaService } from 'src/persona/persona.service';
import { PersonaRepository } from 'src/repositorios/persona.repository';
import { TrabajadorIpressRepository } from 'src/personal/trabajador-ipress.repository';
import { DiagnosticoRepository } from './diagnostico.repository';

@Module({
  controllers: [AtencionesController],
  imports: [TypeOrmModule.forFeature([AtencionesRepositoy,TrabajadorIpressRepository,PersonaRepository,DiagnosticoRepository])],
  providers: [AtencionesService]

})
export class AtencionesModule {


}
