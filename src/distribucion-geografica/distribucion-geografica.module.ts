import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistribucionGeograficaRepository } from './distribucion-geografica.repository';
import { DistribucionGeograficaController } from './distribucion-geografica.controller';
import { DistribucionGeograficaService } from './distribucion-geografica.service';

@Module({
imports:[TypeOrmModule.forFeature([DistribucionGeograficaRepository])],
controllers: [DistribucionGeograficaController],
providers: [DistribucionGeograficaService]

})
export class DistribucionGeograficaModule {}
