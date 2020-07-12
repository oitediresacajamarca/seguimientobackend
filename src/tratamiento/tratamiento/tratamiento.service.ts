import { Injectable } from '@nestjs/common';
import { TratamientoRepository } from '../tratamiento.repository';

@Injectable()
export class TratamientoService {
    constructor(private tratamientorep: TratamientoRepository) { }
    async guardarTratamiento(any) {
    const resp=await    this.tratamientorep.save(any);
    return resp;
    }
}
