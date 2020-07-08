import { Column, Entity, ViewEntity } from "typeorm";
@ViewEntity('PERSONA_DESCRIPCION')
export class PersonaDescripcionEntity {
    @Column() 
    NRO_DOCUMENTO: string;
    @Column()
    TIPO_DOCUMENTO: string;
    @Column()
    TELEFONO: string;
    @Column()
    CORREO: string;
    @Column()
    APELLIDO_PAT: string;
    @Column()
    APELLIDO_MAT: string;
    @Column()
    NOMBRES: string;
    @Column()
    FECHA_NAC: string;
    @Column()
    NOMBRE_DISTRITO: string;
    @Column()
    NOMBRE_PROVINCIA: string;
    @Column()
    NOMBRE_PADRON: string;
    @Column()
    ID_PERSONA: number;
    @Column()
    ID_DISTRITO: string;
    @Column()
    GENERO: string
}
