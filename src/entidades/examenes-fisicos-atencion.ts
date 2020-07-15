import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";


@Entity('EXAMEN_FISICO_ATENCION')
export class ExamenesFisicosAtencionEntity {
    @PrimaryGeneratedColumn()
    ID_EXAMEN_FISICO_ATENCION: number;
    @Column()
    ID_ATENCION: number;
    @Column()
    NRO_ITEM: number;
    @Column()
    COD_EXAMEN_FIS: number;
    @Column()
    VALOR: string;
    @Column()
    ESTADO: number;
    @Column()
    ID_TRABAJADOR: number;
    @Column()
    FEC_REG: Date

}
