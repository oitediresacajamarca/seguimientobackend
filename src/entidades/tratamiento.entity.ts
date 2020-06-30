import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('TRATAMIENTO')
export class TratamientoEntity {
    @PrimaryGeneratedColumn()
    ID_TRATAMIENTO: number;
    @Column()
    ID_ATENCION: number;
    @Column()
    NRO_ITEM: number;
    @Column()
    DESCRIPCION: string;
    @Column()
    ID_TRABAJADOR: number;
    @Column()
    ESTADO_TRATAMIENTO: number;
    @Column()
    CANTIDAD: number;
    @Column()
    FRECUENCIA: string;
    @Column()
    PERIODO: number;
    @Column()
    COD_MEDICAMENTO: string;
    @Column()
    DOSIS: string;
    @Column()
    VIA: string
}

