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

import { DistribucionGeograficaModule } from './distribucion-geografica/distribucion-geografica.module';
import { AtencionRegModule } from './atencion-reg/atencion-reg.module';
import { SolicitudesAtencionModule } from './solicitudes-atencion/solicitudes-atencion.module';
import { PersonaDescripcionModule } from './persona-descripcion/persona-descripcion.module';
import { PacienteModule } from './paciente/paciente.module';
import { HistoriaClinicaModule } from './historia-clinica/historia-clinica.module';
import { AtencionDiagnosticoModule } from './atencion-diagnostico/atencion-diagnostico.module';
import { LogsModule } from './gols/logs.module';
import { ImpresionesModule } from './impresiones/impresiones.module';

import { ExamenesFisicosAtencionModule } from './examenes-fisicos-atencion/examenes-fisicos-atencion.module';
import { AtencionDetalleModule } from './atencion-detalle/atencion-detalle.module';
import { DistribucionIpressModule } from './distribucion-ipress/distribucion-ipress.module';
import { AtencionIpressModule } from './atencion-ipress/atencion-ipress.module';
import { IpressCarteraModule } from './ipress-cartera/ipress-cartera.module';
import { CarteraServicioModule } from './cartera-servicio/cartera-servicio.module';
import { UpssModule } from './upss/upss.module';
import { EventosGateway } from './eventos.gateway';
import { CpmsFullModule } from './cpms-full/cpms-full.module';
import { HeatmapModule } from './heatmap/heatmap.module';
import { UbigeosDistritosModule } from './ubigeos-distritos/ubigeos-distritos.module';
import { BaseNotiModule } from './base-noti/base-noti.module';

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
    DistribucionGeograficaModule,
    AtencionRegModule,
    SolicitudesAtencionModule,
    PersonaDescripcionModule,
    PacienteModule,
    HistoriaClinicaModule,
    AtencionDiagnosticoModule,
    LogsModule,
    ImpresionesModule,
    ExamenesFisicosAtencionModule,
    AtencionDetalleModule,
    DistribucionIpressModule,
    AtencionIpressModule,
    IpressCarteraModule,
    CarteraServicioModule,
    UpssModule,
    CpmsFullModule,
    HeatmapModule,
    UbigeosDistritosModule,
    BaseNotiModule],
  controllers: [AppController],
  providers: [AppService, EventosGateway],
})
export class AppModule { }
