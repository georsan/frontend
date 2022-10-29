import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceInfoComponent } from './page/device-info/device-info.component';
import { IniciarSeccionComponent } from './page/iniciar-seccion/iniciar-seccion.component';
import { HomeComponent } from './page/home/home.component';
import { ConfiguracionComponent } from './page/configuracion/configuracion.component';
import { DatosPersonalesComponent } from './page/datos-personales/datos-personales.component';
import { ContrasenaComponent } from './page/contrasena/contrasena.component';
import { AlertasComponent } from './page/alertas/alertas.component';
import { ReporteComponent } from './page/reporte/reporte.component';
import { AddDeviceComponent } from './page/add-device/add-device.component';
import { VerifyDeviceComponent } from './page/verify-device/verify-device.component';

const routes: Routes = [
  {
    path:'',
    component:IniciarSeccionComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'device',
    component:DeviceInfoComponent
  },
  {
    path:'setting',
    component:ConfiguracionComponent
  },
  {
    path:'profile',
    component:DatosPersonalesComponent
  },
  {
    path:'password',
    component:ContrasenaComponent
  },
  {
    path:'alerts',
    component:AlertasComponent
  },
  {
    path:'add-device',
    component:AddDeviceComponent
  },
  {
    path:'add-device/verify-device',
    component:VerifyDeviceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
