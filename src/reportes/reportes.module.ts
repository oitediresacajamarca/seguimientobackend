import { Module } from '@nestjs/common';
import { FuatController } from './fuat/fuat.controller';

@Module({
  controllers: [FuatController]
})
export class ReportesModule {}
