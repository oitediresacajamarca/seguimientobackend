import { Module } from '@nestjs/common';
import { MorbilidadesController } from './morbilidades.controller';

@Module({
  controllers: [MorbilidadesController]
})
export class MorbilidadesModule {}
