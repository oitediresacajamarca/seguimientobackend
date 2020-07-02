import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Ipress {
@PrimaryColumn()
    COD_IPRESS:string;
    @Column()
    ID_CLAS:number;
    @Column()
    ID_UE:number;
    @Column()
    ID_DISTRITO:string;
    @Column()
    NOMBRE:string;
    @Column()
    DIRECCION:string;
    @Column()
    ID_MICRORED:number;
    @Column()
    CATEGORIA:string;
    @Column()
    ID_PUNTO_DIG_HIS:number
}
