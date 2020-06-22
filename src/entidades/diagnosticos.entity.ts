import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity("ATENCION_DIAGNOSTICO")
export class DiagnosticosEntity {
    @PrimaryColumn('int')
    ID_ATENCION: number;
    @PrimaryColumn('int')
    NRO_ITEM: number;
    @Column()
    CODIGO_DIAGNOSTICO: string;
    @Column()
    TIPO_DIAGNOSTICO: number;
    @Column()
    LAB_DIAGNOSTICO: string;
    @Column()
    ID_TRABAJADOR: number;
    @Column()
    ESTADO_DIAGNOSTICO: number;
}
