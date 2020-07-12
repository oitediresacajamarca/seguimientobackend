import { Module, Controller } from '@nestjs/common';
import { RecetaService } from './receta.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { recetaschema } from './receta.schema';

import { RecetaController } from './receta.controller';

@Module({
  providers: [RecetaService],
  imports:[MongooseModule.forFeature([{name:'receta',schema:recetaschema}])],
  controllers: [RecetaController],

  
})
export class RecetaModule {}
