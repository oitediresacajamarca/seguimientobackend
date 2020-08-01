import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:'ATENCION'})
export class AtencionesEntity {
    @PrimaryGeneratedColumn()
    ID_ATENCION: number;
    @Column({name:'TIPO_CONEXION',nullable:true})
    TIPO_CONEXION: number;
    @Column({name:'ID_MODALIDAD',nullable:true})
    ID_MODALIDAD: number;
    @Column({name:'ID_HC',nullable:true})
    ID_HC: number;
    @Column({name:'ID_TIPO_ATENCION',nullable:true})
    ID_TIPO_ATENCION: number;
    @Column({name:'ANTECEDENTE',nullable:true})
    ANTECEDENTE: string;
    @Column({name:'ID_PACIENTE',nullable:true})
    ID_PACIENTE: number;
    @Column({name:'ID_SOLICITUD',nullable:true})
    ID_SOLICITUD: number;
    @Column({name:'ID_RESPONSABLE',nullable:true})
    ID_RESPONSABLE: number;
    @Column({name:'FECHA',nullable:true})
    FECHA: Date;
    @Column({name:'HORA',nullable:true,type:'time'})
    HORA: Date;
    @Column({name:'FEC_REGISTRO',nullable:true})
    FEC_REGISTRO: number;
    @Column({name:'NIVEL_ATENCION',nullable:true})
    NIVEL_ATENCION: number;
    @Column({name:'CONSENTIMIENTO',nullable:true})
    CONSENTIMIENTO: number;
    @Column({name:'COD_CARTERA',nullable:true})
    COD_CARTERA:string
}

