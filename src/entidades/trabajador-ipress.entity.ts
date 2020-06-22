import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'TRABAJADOR_IPRESS' })
export class TrabajadorIpressEntity {
    @PrimaryGeneratedColumn()
    ID_TRABAJADOR_IPRESS:number;
    @Column()
    ID_PERSONA:number;
        @Column()
    ID_PROFESION:number;
        @Column()
    ID_CONDICION_LABORAL:number;
        @Column()
    ID_IPRESS:string;
        @Column()
    DESCRIPCION:string;
        @Column()
    FEC_INGRESO:string;
        @Column()
    ESTADO:true;


}
;