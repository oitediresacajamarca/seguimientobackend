import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import{MongooseModule} from '@nestjs/mongoose'
import { UsuariosModule } from './usuarios/usuarios.module';
import { ReportesModule } from './reportes/reportes.module';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '/', 'client'),
  }),
  MongooseModule.forRoot('mongodb://localhost:27017/seguimiento?readPreference=primary&ssl=false',{}),
  UsuariosModule,
  ReportesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
