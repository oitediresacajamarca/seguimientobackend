import { Entity } from "typeorm";

@Entity({name:'ATENCION'})
export class AtencionesEntity {
    ID_ATENCION: number;
    TIPO_CONEXION: number;
    ID_MODALIDAD: number;
    ID_HC: number;
    ID_TIPO_ATENCION: number;
    ANTECEDENTE: string;
    ID_PACIENTE: number;
    ID_SOLICITUD: number;
    ID_RESPONSABLE: number;
    FECHA: number;
    HORA: number;
    FEC_REGISTRO: number;
    NIVEL_ATENCION: number;
    CONSENTIMIENTO: number;
}
