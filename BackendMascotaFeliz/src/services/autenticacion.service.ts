import {injectable, BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import {UsuarioRepository} from '../repositories';
import {Llaves} from '../config/llaves'
import { Usuario } from '../models';
const generador =require('password-generator');
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken')


@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
@repository(UsuarioRepository)
public usuarioRepository : UsuarioRepository
){}
  

GenerarClave(){
  let clave = generador(8,false);
  return clave;
}

CifrarClave(clave:string){
  let claveCifrada = cryptoJS.MD5(clave).toString();
  return claveCifrada;
}

authUser(user: string, key: string) {
  try {
    const u = this.usuarioRepository.findOne({
      where: {correo: user, contrasena: key}
    })
    if (u) {
      return u
    }
    return false
  } catch (error) {
    return false
  }
}

getJWT(user: Usuario) {
  const token = jwt.sign({
    data: {id: user.id, correo: user.correo, nombre: user.nombre},
  },
    Llaves.claveJWT)
  return token
}

validJWT(token: string) {
  try {
    const datos = jwt.verify(token, Llaves.claveJWT)
    return datos
  } catch {
    return false
  }
}


}