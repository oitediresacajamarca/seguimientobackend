import { Module } from '@nestjs/common';
import { AtencionDiagnosticoService } from './atencion-diagnostico.service';
import { AtencionDiagnosticoRepository } from './atencion-diagnostico.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtencionDiagnosticoController } from './atencion-diagnostico.controller';

@Module({
  providers: [AtencionDiagnosticoService],
  imports:[TypeOrmModule.forFeature([AtencionDiagnosticoRepository])],
  controllers: [AtencionDiagnosticoController]

})
export class AtencionDiagnosticoModule {}
