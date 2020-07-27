import { Column, ViewEntity } from "typeorm";

@ViewEntity('ATENCION_IPRESS')
export class AtencionIpressEntity {
    @Column()
    ID_ATENCION:number;
    @Column()
    TIPO_CONEXION:number;
    @Column()
    ID_HC:number;
    @Column()
    ID_TIPO_ATENCION:number;
    @Column()
    ID_RESPONSABLE:number;
    @Column()
    FECHA:Date;
    @Column()
    HORA:string;
    @Column()
    ANTECEDENTE:string;
    @Column()
    FEC_REGISTRO:string;
    @Column()
    NIVEL_ATENCION:number;
    @Column()
    CONSENTIMIENTO:number;
    @Column()
    SUB_REGION:string;
    @Column()
    RED:string;
    @Column()
    ID_PACIENTE:string;
    @Column()
    MICRORED:string;
    @Column()
    NOMBRE_ESTABLECIMIENTO:string;
    
  
}
