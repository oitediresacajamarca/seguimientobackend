import { Column, PrimaryColumn, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity('IPRESS_CARTERA')
export class IpressCarteraEntity {
    @PrimaryGeneratedColumn()
    ID_IPRESS_CARTERA:number;
    @Column()
    COD_UPS:string;
    @Column()
    COD_CARTERA:string;
    @Column()
    COD_IPRESS:string
}
