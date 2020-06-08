import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import {MongooseModule} from '@nestjs/mongoose'
import {usuario} from '../schemas/usuario.schema'



@Module({
  imports:[MongooseModule.forFeature([{name:'usuarios',schema:usuario}])],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
