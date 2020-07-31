import { Injectable } from '@nestjs/common';
import { IpressCarteraRepository } from './ipress-cartera-repository';
import { CarteraServicioRepository } from 'src/cartera-servicio/cartera-servicio-repository';
import { UpssRepository } from 'src/upss/upss-repository';

@Injectable()
export class IpressCarteraService {
    constructor(private ipress_cartera: IpressCarteraRepository,
        private carteraservicios: CarteraServicioRepository,
        private upsss: UpssRepository) {
    }
    async fitrar_cartera_ipress(cod_ipress: string) {
        let ipresses = await this.ipress_cartera.find({ where: { COD_IPRESS: cod_ipress ,COD_UPS: "220000"} });
       
      let  serviciosres:any[]=[]
     await Promise.all(  ipresses.map(async (servicios) => {
            let temp:any={}
            Object.assign(temp,servicios)
            let cartera = await this.carteraservicios.findOne({ where: { COD_CARTERA: servicios.COD_CARTERA } })
         
            let ups =await this.upsss.findOne({ where: { COD_UPS: servicios.COD_UPS } })
            temp.cartera=cartera
            temp.ups=ups
            serviciosres.push(temp)
        })
        )
        return serviciosres;
    }
}
