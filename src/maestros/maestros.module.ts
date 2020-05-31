import { Module } from '@nestjs/common';
import { ProfesionService } from './profesion/profesion.service';
import { ProfesionController } from './profesion/profesion.controller';

@Module({
  providers: [ProfesionService],
  controllers: [ProfesionController]
})
export class MaestrosModule {}
