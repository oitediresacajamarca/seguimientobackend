import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtencionRegRepository } from './atencion-reg.repository';
import { AtencionRegService } from './atencion-reg.service';
import { AtencionRegController } from './atencion-reg.controller';

@Module({
    imports:[TypeOrmModule.forFeature([AtencionRegRepository])],
    providers: [AtencionRegService],
    controllers: [AtencionRegController]

})
export class AtencionRegModule {}
