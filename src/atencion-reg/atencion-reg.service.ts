import { Injectable } from '@nestjs/common';
import { AtencionRegRepository } from './atencion-reg.repository';
import { AtencionReg } from './atencion-reg.interface';

@Injectable()
export class AtencionRegService {
  constructor(private atencionregrep: AtencionRegRepository) {

  }
  async guardarAtencionRegRep(atenrep: any) {
    const atencionesreg = await this.atencionregrep.find({ ID_ATENCION: atenrep.ID_ATENCION })
    const hora = atenrep.HORA.split(':')
    atenrep.HORA = new Date(1970, 1, 1, hora[0], hora[1], hora[2])
   atencionesreg.push(atenrep);
    atencionesreg.forEach(async (element, index) => {
      console.log(index)
      console.log(element)
      element.NRO_ITEM = index + 1
      await this.atencionregrep.save(element);
    });


    return atencionesreg

  }
}