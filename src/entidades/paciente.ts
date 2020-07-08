import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity('PACIENTE')
export class Paciente {
    @PrimaryColumn()
    ID_PACIENTE: number
    @Column()
    ID_CENTROP: string
    @Column()
    ID_ETNIA: string
   
}
