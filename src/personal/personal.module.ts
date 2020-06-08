import { Module } from '@nestjs/common';
import { PersonalController } from './personal/personal.controller';

@Module({
  controllers: [PersonalController]
})
export class PersonalModule {}
