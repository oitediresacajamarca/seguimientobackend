import { Module } from '@nestjs/common';
import { AtencionesController } from './atenciones.controller';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  controllers: [AtencionesController],
  imports: []

})
export class AtencionesModule {}
