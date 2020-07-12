import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RecetaInterface } from '../receta.interface';

@Injectable()
export class RecetaService {
    constructor(@InjectModel('receta') private mod: Model<RecetaInterface>) { }
    async crearReceta(receta: RecetaInterface) {
        const res = await this.mod.create(receta);
        return res;
    }
}
