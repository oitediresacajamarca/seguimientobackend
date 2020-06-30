import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TratamientoRepository } from './tratamiento.repository';
import { TratamientoService } from './tratamiento/tratamiento.service';
import { TratamientoController } from './tratamiento/tratamiento.controller';

@Module({
    imports: [TypeOrmModule.forFeature([TratamientoRepository])],
    providers: [TratamientoService],
    controllers: [TratamientoController]
})
export class TratamientoModule {}
