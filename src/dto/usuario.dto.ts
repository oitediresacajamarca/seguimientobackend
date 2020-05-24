export class UsuarioDto {
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
    ]

}
