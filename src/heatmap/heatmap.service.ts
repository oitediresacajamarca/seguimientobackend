import { Injectable } from '@nestjs/common';
import { HeatmapRepository } from './heatmap.repository';
import { BaseNotiReprository } from 'src/base-noti/base-noti.reprository';
import { UbigeosDistritosRepository } from 'src/ubigeos-distritos/ubigeos-distritos.repository';
import { Any } from 'typeorm';

@Injectable()
export class HeatmapService {
    constructor(private heatmap: HeatmapRepository, private basenoty: BaseNotiReprository, private ubids: UbigeosDistritosRepository) { }
    async devolverConfirmadosRegion() {

        let resp = await this.basenoty.find({ where: { clasificacion: "CONFIRMADO" } })
        var respuesta: any[] = []
        await Promise.all(
            resp.map(async (not) => {

                let distrito = await this.ubids.findOne({ where: { COD_UBIGEO: not.ubigeo } })
                let heatmap = await this.heatmap.findOne({ where: { id: not._id } })
                let distancia = 0
                if (distrito != null && heatmap != null) {

                    distancia = Math.sqrt(Math.pow(distrito.LAT - heatmap.lat, 2) + Math.pow(distrito.LONG - heatmap.lng, 2))
                    if (distancia < 1) {
                        respuesta.push(heatmap)
                    }
                }
            })
        )
        return respuesta
    }
}
