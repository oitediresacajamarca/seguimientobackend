import { Module } from '@nestjs/common';
import { PersonalController } from './personal/personal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrabajadorIpressRepository } from './trabajador-ipress.repository';

@Module({
  controllers: [PersonalController],
  imports: [TypeOrmModule.forFeature([TrabajadorIpressRepository])]
})
export class PersonalModule {}
