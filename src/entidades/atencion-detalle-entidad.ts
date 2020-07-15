import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('ATENCION_DETALLE')
export class AtencionDetalleEntidad {
    @PrimaryGeneratedColumn()
    ID_ATENCION: number;
    @Column()
    N_CONTROL: number;
    @Column()
    MOTIVO: string;
    @Column()
    TRATAMIENTO_ACTUAL: string
}
