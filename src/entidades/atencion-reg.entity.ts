import { Column, PrimaryGeneratedColumn, Entity, PrimaryColumn } from "typeorm";

@Entity('ATENCION_REG')
export class AtencionRegEntity {
    @PrimaryColumn()
    ID_ATENCION: number;
    @PrimaryColumn()
    NRO_ITEM: number;
    @Column()
    TIPO_CONSULTOR: string;
    @Column()
    LOTE: string;
    @Column()
    NUMERO_FUA: string;
    @Column()
    ID_TRABAJADOR: number;
    @Column()
    COD_PRESTACIONAL: string;
    @Column()
    NIVEL: number;
    @Column()
    FEC_ATENCION: Date;
    @Column()
    HORA: Date;
    @Column()
    ID_FINANCIADOR: 1;
    @Column()
    ID_UPSS: 302303
}
