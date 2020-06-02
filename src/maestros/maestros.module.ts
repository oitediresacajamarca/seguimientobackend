import { Module } from '@nestjs/common';
import { ProfesionService } from './profesion/profesion.service';
import { ProfesionController } from './profesion/profesion.controller';
import { DistribucionAdministrativaController } from './distribucion-administrativa/distribucion-administrativa.controller';

@Module({
  providers: [ProfesionService],
  controllers: [ProfesionController, DistribucionAdministrativaController]
})
export class MaestrosModule {}
