import { Module } from '@nestjs/common';
import { CpmsFullService } from './cpms-full.service';
import { CpmsFullController } from './cpms-full.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CpmsFullRepository } from './cpms-full.repository';

@Module({
  providers: [CpmsFullService],
  controllers: [CpmsFullController],
  imports:[TypeOrmModule.forFeature([CpmsFullRepository])]
})
export class CpmsFullModule {}
