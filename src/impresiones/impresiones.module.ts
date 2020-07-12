import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { recetaschema } from './receta/receta.schema';


import { RecetaController } from './receta/receta.controller';
import { RecetaModule } from './receta/receta.module';
import { RecetaService } from './receta/receta.service';

@Module({
    imports:[ RecetaModule],
    providers: [],
    controllers: [],
})
export class ImpresionesModule {}
