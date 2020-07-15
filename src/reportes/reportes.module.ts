import { Module } from '@nestjs/common';
import { FuatController } from './fuat/fuat.controller';
import { FuatService } from './fuat/fuat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FuatSchema } from './fuat/fuat.schema';
import { HistoriaClinicaRepository } from 'src/historia-clinica/historia-clinica.repository';
import { HistoriaClinicaModule } from 'src/historia-clinica/historia-clinica.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtencionRegRepository } from 'src/atencion-reg/atencion-reg.repository';
import { PersonaRepository } from 'src/repositorios/persona.repository';
import { AtencionesRepositoy } from 'src/atenciones/atenciones.repositoy';
import { IpressRepository } from 'src/ipress/ipress.repository';
import { ExamenesFisicosAtencionRepository } from 'src/examenes-fisicos-atencion/examenes-fisicos-atencion-repository';
import { SolicitudesAtencionRepository } from 'src/solicitudes-atencion/solicitudes-atencion.repository';
import { AtencionDetalleEntidadRepository } from 'src/atencion-detalle/atencion-detalle-entidad-repository';
import { TrabajadorIpressRepository } from 'src/personal/trabajador-ipress.repository';
import { AtencionDiagnosticoRepository } from 'src/atencion-diagnostico/atencion-diagnostico.repository';



@Module({
  imports: [MongooseModule.forFeature([{ name: 'fuat', schema: FuatSchema }]),
  TypeOrmModule.forFeature([HistoriaClinicaRepository,AtencionRegRepository,
    PersonaRepository,AtencionesRepositoy,IpressRepository,ExamenesFisicosAtencionRepository,SolicitudesAtencionRepository
  ,AtencionDetalleEntidadRepository,TrabajadorIpressRepository,TrabajadorIpressRepository,
  AtencionDiagnosticoRepository])],
  controllers: [FuatController],
  providers: [FuatService],


})
export class ReportesModule { }
