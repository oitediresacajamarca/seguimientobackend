import { Column, PrimaryColumn, PrimaryGeneratedColumn, Entity } from "typeorm";


@Entity('SOLICITUD_PACIENTE')
export class SolicitudesAtencionEntity {
    @Column()
    ID_PACIENTE: number;
    @PrimaryGeneratedColumn()
    ID_SOLICITUD: number;
    @Column()
    DESCRIPCION: string;
    @Column()
    TELEF_CONTACTO: string;
    @Column()
    TELEF_CONTACTO2: string;
    @Column()
    DOMICILIO_ACTUAL: string;
    @Column()
    REFERENCIA: string;
    @Column()
    FECHA_SOLICITUD: string;
    @Column()
    ID_IPRESS: string;
    @Column()
    ESTADO: string;
    @Column()
    CORREO: string;
    @Column()
    ID_DISTRITO: string;
    @Column()
    COD_CARTERA:string;

}
