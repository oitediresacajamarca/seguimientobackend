import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fuat } from '../fuat.interface';

@Injectable()
export class FuatService {
    constructor(@InjectModel('fuat') private mod: Model<Fuat>) { }

    async devuelveId() : Promise<Fuat[]>{
       const p= await this.mod.find();
       return p;
    }
}
