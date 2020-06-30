import { Injectable } from '@nestjs/common';
import { MedicamentoRepository } from '../medicamento.repository';

@Injectable()
export class MedicamentoService {
    constructor(private medicamentorep: MedicamentoRepository) {

    }
    async listarMedicamentos() {
        
        const resp = await this.medicamentorep.find();
        return resp;

    }
    async filtrarMedicamentos(filtro:any) {


  let filthe={where:"COD_MEDICAMENTO like '%"+filtro.COD_MEDICAMENTO+"%' and MEDICAMENTO like '%"+filtro.MEDICAMENTO+"%' and PRESENTACION like '%"+filtro.PRESENTACION+"%' "}
         
  
  /*COD_MEDICAMENTO: string;
            MEDICAMENTO: string;
            PRESENTACION: string;
            CONCENTRACION: string;
            TIPO: string;
            PETITORIO: string;
            FF: string;
            ESTRATEGIA: string;
            ESTVTA: string;
            FECHAUPD: string;
            CODIGO_SIG: string;
            ESTADO: string
   */
        
        const resp = await this.medicamentorep.find(filthe);
        return resp;

    }
}
