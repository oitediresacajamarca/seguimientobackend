import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity('UPSS')
export class UpssEntity {
    @PrimaryColumn()
    COD_UPS:string;
    @Column()
    NOMBRE_UPS:string;
}
