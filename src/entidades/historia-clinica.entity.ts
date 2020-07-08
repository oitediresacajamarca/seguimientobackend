import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('HISTORIA_CLINICA')
export class HistoriaClinicaEntity {
    @PrimaryGeneratedColumn()
    ID_HC:number;
    @Column()
    NRO_HCL:string;
    @Column()
    ARCHIVO_CLINICO:string;
    @Column()
    TIPO_HC:number;
    @Column()
    ID_PACIENTE:number;
    @Column()
    COD_IPRESS:string;
    @Column()
    ESTADO_HC:number;
    @Column('datetime')
    FEC_REGISTRO:Date
}
