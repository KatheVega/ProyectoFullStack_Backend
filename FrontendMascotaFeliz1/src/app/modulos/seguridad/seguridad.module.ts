import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { OlvidarClaveComponent } from './olvidar-clave/olvidar-clave.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecuperarClaveComponent,
    CerrarSesionComponent,
    RegistrarComponent,
    OlvidarClaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
