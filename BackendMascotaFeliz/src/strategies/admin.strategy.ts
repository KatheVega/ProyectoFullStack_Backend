import { AuthenticationStrategy } from "@loopback/authentication";
import { DataSourceDefaults } from "@loopback/boot";
import { service } from "@loopback/core";
import { Request, RedirectRoute, HttpErrors } from "@loopback/rest";
import { UserProfile } from "@loopback/security";
import { ParamsDictionary } from "express-serve-static-core";
import parseBearerToken from "parse-bearer-token";
import { ParsedQs } from "qs";
import { AutenticacionService } from '../services/autenticacion.service';

export class EstrategiaAdministrador implements AuthenticationStrategy{
    name: string = 'admin';

    constructor(
        @service(AutenticacionService)
        public servicioAutenticacion: AutenticacionService
    ){}

    async authenticate(request: Request): Promise<UserProfile | undefined> {
        let token =parseBearerToken(request)
        if (token){
            let datos = this.servicioAutenticacion.validJWT(token);
            if(datos){
                let perfil: UserProfile = Object.assign({
                    nombre: datos.data.nombre
                });
                return perfil;
            }else{
                throw new HttpErrors[401]('Token falso')
            }
        }else{
            throw new HttpErrors[401]('No incluyo el token')
        }
    }
}