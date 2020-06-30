import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('MEDICAMENTO')
export class MedicamentoEntity {
    @PrimaryColumn()
    COD_MEDICAMENTO: string;
    @Column()
    MEDICAMENTO: string;
    @Column()
    PRESENTACION: string;
    @Column()
    CONCENTRACION: string;
    @Column()
    TIPO: string;
    @Column()
    PETITORIO: string;
    @Column()
    FF: string;
    @Column()
    ESTRATEGIA: string;
    @Column()
    ESTVTA: string;
    @Column()
    FECHAUPD: string;
    @Column()
    CODIGO_SIG: string;
    @Column()
    ESTADO: string

    
}
