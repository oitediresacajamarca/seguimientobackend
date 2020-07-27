import { Module } from '@nestjs/common';
import { DistribucionIpressService } from './distribucion-ipress.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistribucionIpressRepository } from './distribucion-ipress-repository';

@Module({
    

  providers: [DistribucionIpressService],
  imports:[TypeOrmModule.forFeature([DistribucionIpressRepository])]

})
export class DistribucionIpressModule {}
