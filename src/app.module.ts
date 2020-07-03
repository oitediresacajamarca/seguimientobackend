import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose'
import { UsuariosModule } from './usuarios/usuarios.module';
import { ReportesModule } from './reportes/reportes.module';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { MaestrosModule } from './maestros/maestros.module';
import { PersonalModule } from './personal/personal.module';
import { MorbilidadesModule } from './morbilidades/morbilidades.module';
import { AtencionesModule } from './atenciones/atenciones.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { PersonaModule } from './persona/persona.module';
import { MedicamentoModule } from './medicamento/medicamento.module';
import { TratamientoModule } from './tratamiento/tratamiento.module';
import { IpressModule } from './ipress/ipress.module';
import { RecetaController } from './impresiones/receta/receta.controller';
import { DistribucionGeograficaModule } from './distribucion-geografica/distribucion-geografica.module';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '/', 'seguimientopacientespersonal'),
  }),
  MongooseModule.forRoot('mongodb://localhost:27017/seguimiento?readPreference=primary&ssl=false', {}),
  TypeOrmModule.forRoot(),
    UsuariosModule,
    ReportesModule,
    SolicitudesModule,
    MaestrosModule,
    PersonalModule,
    MorbilidadesModule,
    AtencionesModule,
    PersonaModule,
    MedicamentoModule,
    TratamientoModule,
    IpressModule,
    DistribucionGeograficaModule],
  controllers: [AppController, RecetaController],
  providers: [AppService],
})
export class AppModule { }
