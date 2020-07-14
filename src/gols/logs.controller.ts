import { Controller, LoggerService, Post, Body, Param, Get } from '@nestjs/common';
import { LogsService } from './logs.service';

@Controller('logs')
export class LogsController {
    constructor(private logs: LogsService) { }
    @Post('log')
    async log(@Body() body) {
        const resp = await this.logs.log(body.user, body.accion, body.payload)
        return resp;
    }
    @Get('verlogs/:user')
    async verlogs(@Param() user) {
        const resp = await this.logs.verlogs(user.user)
        return resp;
    }
    @Get('verlogs')
    async vertodologs() {
        const resp = await this.logs.vertodoslogs()
        return resp;
    }
}
