import { ViewEntity, Column } from "typeorm";

@ViewEntity('DISTRIBUCION_IPRESS')
export class DistribucionIpressEntity {
    @Column()
    DEPARTAMENTO: string;
    @Column()
    PROVINCIA: string;
    @Column()
    DISTRITO: string;
    @Column()
    CODIGO_UGIPRESS: string;
    @Column()
    UNIDAD_EJECUTORA: string;
    @Column()
    SUB_REGION: string;
    @Column()
    RED: string;
    @Column()
    MICRORED: string;
    @Column()
    CLAS: string;
    @Column()
    ID_PUNTO_DIG_HIS: number;
    @Column()
    PUNTO_DIGITACION_HIS: string;
    @Column()
    NOMBRE_ESTABLECIMIENTO: string;
    @Column()
    CODIGO_RENIPRESS: string;
    @Column()
    ID_SUBREGION: number;
    @Column()
    ID_RED: number;
    @Column()
    ID_MICRORED: number
}
