import { Injectable } from '@nestjs/common';
import { AtencionDiagnosticoRepository } from './atencion-diagnostico.repository';

@Injectable()
export class AtencionDiagnosticoService {
    constructor(private aterep: AtencionDiagnosticoRepository) { }

    async guardarDiagnosticos(diagnosticos) {
        const res = await this.aterep.save(diagnosticos)
        return res
    }

}
