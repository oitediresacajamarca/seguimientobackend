import { Column, PrimaryColumn, Entity } from "typeorm";


@Entity('DISTRIBUCION_GEOGRAFICA')
export class DistribucionGeograficaEntity {
    @PrimaryColumn()
    ID_DISTRITO:string;
    @Column()
    NOMBRE_DISTRITO:string;
    @Column()
    ID_PROVINCIA:string;
    @Column()
    NOMBRE_PROVINCIA:string;
    @Column()
    ID_DEPARTAMENTO:string;
    @Column()
    NOMBRE_DEPARTAMENTO:string;
   
}
