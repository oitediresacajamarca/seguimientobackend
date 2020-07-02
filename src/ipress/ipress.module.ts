import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IpressRepository } from './ipress.repository';

import { IpressService } from './ipress/ipress.service';
import { IpressController } from './ipress/ipress.controller';

@Module({
    imports:[TypeOrmModule.forFeature([IpressRepository])],
    providers: [ IpressService],
    controllers: [IpressController],
})
export class IpressModule {}
