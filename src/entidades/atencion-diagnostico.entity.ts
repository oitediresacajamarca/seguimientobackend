import { PrimaryColumn, Column, Entity } from "typeorm";

@Entity('ATENCION_DIAGNOSTICO')
export class AtencionDiagnosticoEntity {
    @PrimaryColumn()
    ID_ATENCION:number;
    @PrimaryColumn()
    NRO_ITEM:number;
    @Column()
    CODIGO_DIAGNOSTICO:string;
    @Column()
    TIPO_DIAGNOSTICO:number;
    @Column()
    LAB_DIAGNOSTICO:string;
    @Column()
    ID_TRABAJADOR:number;
    @Column()
    ESTADO_DIAGNOSTICO:number
}
