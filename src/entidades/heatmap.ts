import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity('heatmap')
export class Heatmap {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    lat: number;
    @Column()
    lng: number
}
