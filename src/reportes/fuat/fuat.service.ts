import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fuat } from '../fuat.interface';


@Injectable()
export class FuatService {
    constructor(@InjectModel('fuat') private mod: Model<Fuat>) { }

    async devuelveId(): Promise<Fuat[]> {
        const p = await this.mod.find();

        return p;
    }
    async crearFuat(fuanueva: Fuat): Promise<Fuat> {
        const fuatn = new this.mod(fuanueva);
        return await fuatn.save()



        
    }
    async devolverFuat(cod_fuat){
        const fuatn = await this.mod.findOne({numeroFuat:cod_fuat});
        return fuatn;
    }

}
