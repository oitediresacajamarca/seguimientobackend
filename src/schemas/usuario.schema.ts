import { Schema } from 'mongoose'
var ambitoschema = new Schema({

    tipo_ambito: String,
    cod_ambito: String,
    COD_IPRESS: String,
    COD_MICRORED: String,
    COD_RED: String,
    COD_SUBREGION: String,
    peso:Number ,
    peso_sup:Number,
    NOMBRE_IPRESS: String,
    NOMBRE_MICRORED: String,
    NOMBRE_RED: String,
    NOMBRE_SUBREGION: String

})
var establecimiento = new Schema({

    cod_ipress: String,
    NOMBRE_IPRESS: String




})

var DATOS_PROFESIONALES= new Schema({
   
    
        ID_PROFESION: String,
        NOMBRE_PROFESION: String,
        ID_COLEGIO: String,
        NOMBRE_COLEGIO: String,
        NOMBRE_ESPECIALIDAD: String,
        COD_COLEGIATURA: String
    
}
)

export const usuario = new Schema({
    username: String,
    clave: String,
    id_persona: Number,
    id_trabajadores: [Number],
    numero_doc: String,
    tipo_doc: String,
    ambitos: [ambitoschema],
    establecimientos: [establecimiento],
    ID_PROFESION: Number,
    ID_CONDICION: Number,
    FUNCION: String,
    TIPO_AMBITO_GEOGRAFICO: String,
    NOMBRES: String,
    APELLIDO_MAT: String,
    APELLIDO_PAT: String,
    COD_AMBITO_ADMINISTRATIVO: Number,
    COD_AMBITO_GEOGRAFICO: String,
    COD_IPRESS: String,
    CORREO: String,
    ID_DISTRITO: String, ID_GENERO: String,
    NOMBRE_IPRESS: String,
    TELEFONO: String,
    TIPO_AMBITO_ADMINISTRATIVO: String,
    logueado: String,     
    DATOS_PROFESIONALES:DATOS_PROFESIONALES,
    estado:String,
    roles:[String]

})


