import { Schema } from "mongoose";



export const logschema=new Schema({
    user: String,
    accion: String,
    fecha: Date,
    payload:String
   
})

