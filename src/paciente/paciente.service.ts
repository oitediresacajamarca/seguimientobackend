import { Injectable } from '@nestjs/common';
import { PacienteRepository } from './paciente.repository';
import { HistoriaClinicaRepository } from 'src/historia-clinica/historia-clinica.repository';

@Injectable()
export class PacienteService {

    constructor(private pacienterep: PacienteRepository, private hc: HistoriaClinicaRepository) {
    }
    async preparaPaciente(id_persona: number, ipress: string, nro_documento: string) {

        let paciente = await this.pacienterep.findOne({ where: { ID_PACIENTE: id_persona } })

        if (paciente == null) {
            paciente = await this.pacienterep.create({
                ID_PACIENTE: id_persona,
                ID_CENTROP: '',
                ID_ETNIA: '58'
            });
            paciente = await this.pacienterep.save(paciente)

        } else {
            console.log('existe el paciente')

        }

        let hccreada = await this.hc.findOne({ where: { ID_PACIENTE: paciente.ID_PACIENTE } })

        if (hccreada == null) {

            hccreada = await this.hc.create(
                {
                    NRO_HCL: nro_documento,
                    ARCHIVO_CLINICO: '',
                    TIPO_HC: 1,
                    ID_PACIENTE: paciente.ID_PACIENTE,
                    COD_IPRESS: ipress,
                    ESTADO_HC: 1,
                    FEC_REGISTRO: new Date()
                }
            )

            hccreada = await this.hc.save(hccreada)
        }
        else {
            console.log('existe historia clinica')

        }

        return { paciente: paciente, historia: hccreada };
    }
}
