import {Document} from 'mongoose';
export interface Usuarios extends Document{
    username: string;
    clave: string;
    id_persona: number;
    numero_doc: string;
    tipo_doc: string;
    ambitos: {
        tipo_ambito: string;
        cod_ambito: string;
    }[];
    establecimientos:{cod_ipress:string}[      
    ];
    estado:string,
    roles:string[]
}
