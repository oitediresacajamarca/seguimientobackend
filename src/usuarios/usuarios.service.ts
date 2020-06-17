import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuarios } from 'src/usuarios.interface';

@Injectable()
export class UsuariosService {

    constructor(@InjectModel('usuarios') private mod: Model<Usuarios>) {
    }

    async loguear(username: string, clave: string): Promise<Usuarios> {

        const pr = await this.mod.findOne({ login: username, clave: clave });

        return pr;

    }
    async loguearyambito(username: string, clave: string, peso: number): Promise<Usuarios> {

        const pr = await (await this.mod.findOne(
            {
                username: username,
                clave: clave,
                "ambitos.peso": { "$lte": peso },
                "ambitos.peso_sup": { "$gt": peso }
            }))

        return pr;

    }
    async verificarusario(username: string): Promise<Usuarios> {


        const pr = await this.mod.findOne({ login: username });

        return pr;

    }
    async nuevo(nuevo: any): Promise<Usuarios> {

        console.log(nuevo);
        const pr = await this.mod.create(nuevo);

        return pr;

    }
    async listar_usuarios() {
        const respuesta = await this.mod.find();
        return respuesta;
    }
    async listar_usuarios_ambito(peso:number,peso_sup:number) {
        const respuesta = await this.mod.find({"ambitos.peso":{"$gte":peso},"ambitos.peso_sup":{"$lte":peso_sup}});
        return respuesta;
    }
    async eliminar_usuario(id: string) {
        const respuesta = await this.mod.findByIdAndDelete(id);
        return respuesta;
    }
    async actualizar_usuario(id: number, datos) {
        const usuario = await this.mod.updateMany({ "id_persona": id }, { "clave": datos.newpassword,"estado":datos.estado })

        console.log(datos)
        return usuario;
    }


}
