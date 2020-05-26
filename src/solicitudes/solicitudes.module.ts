import { Module } from '@nestjs/common';
import { SolicitudesController } from './solicitudes/solicitudes.controller';

@Module({
  controllers: [SolicitudesController]
})
export class SolicitudesModule {}
