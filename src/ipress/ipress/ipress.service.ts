import { Injectable, Get } from '@nestjs/common';
import { IpressRepository } from '../ipress.repository';

@Injectable()
export class IpressService {

    constructor(private IpressRep: IpressRepository) {


    }

    async devolverIpress(cod_ipress: string) {
    const resp= await    this.IpressRep.find({ COD_IPRESS: cod_ipress })
    return resp;
    }
}
