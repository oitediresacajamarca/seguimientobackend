import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'PERSONA' })

export class PersonaEntity {

    @PrimaryGeneratedColumn()
    ID_PERSONA: number;
    @Column()
    ID_TIPOD: number;
    @Column()
    NRO_DOCUMENTO: string;
    @Column()
    ID_GENERO: number;
    @Column()
    NOMBRES:string
    @Column()
    APELLIDO_PAT: string;
    @Column()
    APELLIDO_MAT: string;
    @Column()
    ID_DISTRITO: string;
    @Column()
    FECHA_NAC: Date;
    @Column()
    TELEFONO: string;
    @Column()
    CORREO: string;
    @Column()
    IMAGEN_PERSONA: string;
    @Column()
    DIRECCION:string



}
