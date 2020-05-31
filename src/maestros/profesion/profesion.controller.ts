import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { ProfesionService } from './profesion.service';

@Controller('profesion')
export class ProfesionController {

    constructor(private prof_serv: ProfesionService) {

    
      

    }

    @Get('profesiones')
    async getProfesiones(@Res() resp){
        const res= await this.prof_serv.listarProfesion()
        resp.status(HttpStatus.OK).json(res);

    }
}
