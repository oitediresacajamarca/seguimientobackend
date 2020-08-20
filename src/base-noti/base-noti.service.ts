import { Injectable } from '@nestjs/common';
import { BaseNotiReprository } from './base-noti.reprository';
import { HeatmapRepository } from 'src/heatmap/heatmap.repository';
import { UbigeosDistritosService } from 'src/ubigeos-distritos/ubigeos-distritos.service';
import { UbigeosDistritosRepository } from 'src/ubigeos-distritos/ubigeos-distritos.repository';

@Injectable()
export class BaseNotiService {

    constructor(private basenorep: BaseNotiReprository, private heatmap: HeatmapRepository,private distrit:UbigeosDistritosRepository) {

    }
    async devolverConfirmadosDistrito(COD_DISTRITO: string) {
        const resp = await this.basenorep.find({ where: { ubigeo: COD_DISTRITO, clasificacion: "CONFIRMADO" } })

        return resp
    }
    async devolverConfirmadosDistritoHeat(COD_DISTRITO: string) {
        const resp = await this.basenorep.find({ where: { ubigeo: COD_DISTRITO, evolucion: "CONFIRMADO" } })
        let respgeo: any[] = []
        await Promise.all(resp.map(async (noti) => {
            let geo = await this.heatmap.findOne({ where: { id: noti._id } })
            if (geo != null) {
                respgeo.push(geo)
            }
        }))
        return respgeo

    }
    async devolverDefuncionesRegion(){
        const resp = await this.basenorep.find({ where: {  evolucion: "FALLECIÓ" } })  
        var respuesta: any[] = []
        await Promise.all(
            resp.map(async (not) => {

                let distrito = await this.distrit.findOne({ where: { COD_UBIGEO: not.ubigeo } })
                let heatmap = await this.heatmap.findOne({ where: { id: not._id } })
                let distancia = 0
                if (distrito != null && heatmap != null) {

                    distancia = Math.sqrt(Math.pow(distrito.LAT - heatmap.lat, 2) + Math.pow(distrito.LONG - heatmap.lng, 2))
                    if (distancia < 2) {
                        respuesta.push(heatmap)
                    }
                }
            })
        )
        return respuesta
    }

}
