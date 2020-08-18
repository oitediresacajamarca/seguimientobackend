import { Column, ViewEntity } from "typeorm";
@ViewEntity('CPMS_FULL')
export class CpmsFullEntity {
    @Column()
    NOMBRE_GRUPO:string
    @Column()
    ID_GRUPOCPT:string;
    @Column()
    ID_SECCIONCPT:string;
    @Column()
    NOMBRE_SECCION:string;
    @Column()
    ID_SUBSECCIONCPT:string;
    @Column()
    NOMBRE_SUBSECCION:string;
    @Column()
    NOMBRE_CPMS:string;
    @Column()
    ID_CPT:string;
    @Column()
    TIPO:string


}
