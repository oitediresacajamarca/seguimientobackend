import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuarios } from 'src/usuarios.interface';
import { Logs } from './logs.interface';
import { AnyAaaaRecord } from 'dns';

@Injectable()
export class LogsService {
    constructor(@InjectModel('logs') private logmod: Model<any>) { }
    async log(user: string, accion: string, payload: string) {
       
        const resp = await this.logmod.create({
            user: user,
            accion: accion,
            fecha: new Date(),
            payload: JSON.stringify(payload)
        })
        return resp;
    }

    async verlogs(user: string) {
        const resp = await this.logmod.find({ user: user })
        let respf = resp.map((lo) => {
            let dto: any = {}
            dto.user = lo.user
            dto.accion = lo.accion
            dto.fechaperu = lo.fecha.toLocaleString('es-PE')
            dto.payload = JSON.parse(lo.payload)

            return dto

        })
        return respf;
    }
    async vertodoslogs() {
        const resp = await this.logmod.find()
        let respf = resp.map((lo) => {

            let dto: any = lo;
            dto.fechaperu = lo.fecha.toLocaleString('es-PE')

            return dto

        })
        return respf;
    }
}
