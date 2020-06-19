import { Module } from '@nestjs/common';
import { AtencionesController } from './atenciones.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AtencionesRepositoy } from './atenciones.repositoy';
import { AtencionesService } from './atenciones.service';

@Module({
  controllers: [AtencionesController],
  imports: [TypeOrmModule.forFeature([AtencionesRepositoy])],
  providers: [AtencionesService]

})
export class AtencionesModule {


}
