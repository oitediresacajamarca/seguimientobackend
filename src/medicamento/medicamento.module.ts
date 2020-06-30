import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicamentoRepository } from './medicamento.repository';
import { MedicamentoController } from './medicamento/medicamento.controller';
import { MedicamentoService } from './medicamento/medicamento.service';

@Module({
    imports: [TypeOrmModule.forFeature([MedicamentoRepository])],
    controllers: [MedicamentoController],
    providers: [MedicamentoService]
})
export class MedicamentoModule {}
