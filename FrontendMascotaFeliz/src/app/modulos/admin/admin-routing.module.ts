import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { ListarMascotaComponent } from './mascotas/listar-mascota/listar-mascota.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { ListarPlanComponent } from './planes/listar-plan/listar-plan.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { ListarSucursalComponent } from './sucursales/listar-sucursal/listar-sucursal.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuarios/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {
    path:"crear-usuario",
    component:CrearUsuarioComponent
  },
  {
    path:"buscar-usuario",
    component:BuscarUsuarioComponent
  },
  {
    path:"editar-usuario",
    component:EditarUsuarioComponent
  },
  {
    path:"eliminar-usuario",
    component:EliminarUsuarioComponent
  },
  {
    path:"listar-usuarios",
    component:ListarUsuarioComponent
  },
  {
    path:"crear-mascota",
    component:CrearMascotaComponent
  },
  {
    path:"buscar-mascota",
    component:BuscarMascotaComponent
  },
  {
    path:"editar-mascota",
    component:EditarMascotaComponent
  },
  {
    path:"eliminar-mascota",
    component:EliminarMascotaComponent
  },
  {
    path:"listar-mascota",
    component:ListarMascotaComponent
  },
  {
    path:"crear-sucursal",
    component:CrearSucursalComponent
  },
  {
    path:"eliminar-sucursal",
    component:EliminarSucursalComponent
  },
  {
    path:"editar-sucursal",
    component:EditarSucursalComponent
  },
  {
    path:"listar-sucursal",
    component:ListarSucursalComponent
  },
  {
    path:"listar-sucursales",
    component:ListarSucursalComponent
  },
  {
    path:"crear-plan",
    component:CrearPlanComponent
  },
  {
    path:"eliminar-plan",
    component:EliminarPlanComponent
  },
  {
    path:"editar-plan",
    component:EditarPlanComponent
  },
  {
    path:"listar-plan",
    component:ListarPlanComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
