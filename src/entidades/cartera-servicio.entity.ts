import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('CARTERA_SERVICIO')
export class CarteraServicioEntity {
    @PrimaryGeneratedColumn()
    COD_CARTERA:number;
    @Column()
    NOMBRE_CARTERA:string;
}
