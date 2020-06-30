import { Injectable } from '@nestjs/common';
import { TratamientoRepository } from '../tratamiento.repository';

@Injectable()
export class TratamientoService {
    constructor(private tratamientorep: TratamientoRepository) { }
    guardarTratamiento(any) {
        this.tratamientorep.save(any);
    }
}
