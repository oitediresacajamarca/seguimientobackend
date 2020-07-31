import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IpressCarteraRepository } from './ipress-cartera-repository';
import { UpssRepository } from 'src/upss/upss-repository';
import { CarteraServicioRepository } from 'src/cartera-servicio/cartera-servicio-repository';
import { IpressCarteraService } from './ipress-cartera.service';
import { IpressCarteraController } from './ipress-cartera.controller';

@Module({
    imports:[TypeOrmModule.forFeature([IpressCarteraRepository,UpssRepository,CarteraServicioRepository])],
    providers: [IpressCarteraService],
    controllers: [IpressCarteraController]
})
export class IpressCarteraModule {}
