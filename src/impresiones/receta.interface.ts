import { Document } from "mongoose";

interface DIAGNOSTICOSlist extends Document {
    NRO_ITEM: Number,
    COD_DIAGNOSTICO: String,
    TIPO: String,
    DIAGNOSTICO: String
}

interface ITEM extends Document {
    ITEM: Number,
    MEDICAMENTO: String,
    DOSIS: String,
    VIA: String,
    FRECUENCIA: String,
    DURACION: String,
    PRESENTACION: String,
    CONCENTRACION: String,
    CANTIDAD: String,
    FF: String
}


export interface RecetaInterface extends Document {
    ID_ATENCION: Number,
    NOMBRE_IPRESS: String,
    DIRECCION: String,
    CIUDAD: String,
    NOMBRE_COMPLETO_PACIENTE: String,
    EDAD_PACIENTE: Number,
    COD_ASEGURADO: String,
    NRO_DOCUMENTO: String,
    FINANCIADOR: String,
    ATENCION: String,
    ESPECIALIDAD: String,
    NR0_HCL: String,
    DIAGNOSTICOSlist: DIAGNOSTICOSlist[],
    PROFESIONAL: {
        NOMBRE_COMPLETO: String
    },
    ITEMS: ITEM[]

}
