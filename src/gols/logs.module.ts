import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { logschema } from './logs.schema';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';

@Module({
    imports:[   MongooseModule.forFeature([{ name:'logs',schema:logschema}]) ],
    providers: [LogsService],
    controllers: [LogsController]
})
export class LogsModule {}
