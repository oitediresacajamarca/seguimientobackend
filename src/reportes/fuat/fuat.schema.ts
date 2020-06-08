import { Schema } from "mongoose";
var Personal=new Schema({
    nombresyapellidos:String,
    profesion:String,
    colegiatura:String,
});

var Diagnostico=new Schema({
    item:Number,
    cod_diag:String,
    tipo_diag:String,
    valor_lab:String,
    desc_diag:String

});


export const FuatSchema = new Schema({
    codigo: Number,
    numeroFuat:Number,
    nombresypaciente:String,
    fechasolicitud:String,
    horasolicitud:String,
    edad:String,
    sexo:String,nro_documento:String,
    tiposeguro:String,
    nuevocontrol:Boolean,
    numerocontrol:String,
    especialidades:[String],
    examenfisico:{
        presionarterial:String,
        frecuenciacardiaca:String,
        frecuenciarespi:String,
        temperatura:String,
        satO2:String,
        peso:String,
        talla:String,
        descripciondecaso:String
    },
    tratamiento:String,
    examendeapoyo:String,
    motivo:[String],
    nombreipress:String,
    codipress:String,
    fechaatencion:String,
    horaatencion:String,
    diagnosticos:[Diagnostico],
    recomendaciones:[String],
    personal:Personal

})


