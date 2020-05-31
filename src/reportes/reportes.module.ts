import { Module } from '@nestjs/common';
import { FuatController } from './fuat/fuat.controller';
import { FuatService } from './fuat/fuat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FuatSchema } from './fuat/fuat.schema';



@Module({
  imports:[MongooseModule.forFeature([{name:'fuat',schema:FuatSchema}])],
  controllers: [FuatController],
  providers: [FuatService],
 
 
})
export class ReportesModule {}
