import {Document} from 'mongoose';
export interface Logs  extends Document{
    user:string;
    accion:string;
    fecha:Date;
    payload?:string;


}
