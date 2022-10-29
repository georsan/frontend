import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './component/device/device.component';
import { ListDevicesComponent } from './component/list-devices/list-devices.component';
import { AlertasyreportesComponent } from './component/alertasyreportes/alertasyreportes.component';
import { BotonesComponent } from './component/utils/botones/botones.component';
import { EditarPerfilComponent } from './component/primario/editar-perfil/editar-perfil.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { InputComponent } from './component/utils/input/input.component';
import { CambiarPasswordComponent } from './component/cambiar-password/cambiar-password.component';
import { AgregarDispositivoComponent } from './component/agregar-dispositivo/agregar-dispositivo.component';
import { IngresarIdComponent } from './component/ingresar-id/ingresar-id.component';
import { IdIncorrectoComponent } from './component/id-incorrecto/id-incorrecto.component';
import { NuevoDispositivoComponent } from './component/nuevo-dispositivo/nuevo-dispositivo.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { ActivarDesactivadarAlertasComponent } from './component/activar-desactivadar-alertas/activar-desactivadar-alertas.component';
import { ActivarAlertasComponent } from './component/activar-alertas/activar-alertas.component';
import { DesactivarAlertasComponent } from './component/desactivar-alertas/desactivar-alertas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
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
import { HeaderComponent } from './component/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    ListDevicesComponent,
    AlertasyreportesComponent,
    EditarPerfilComponent,
    PerfilComponent,
    InputComponent,
    BotonesComponent,
    CambiarPasswordComponent,
    AgregarDispositivoComponent,
    IngresarIdComponent,
    IdIncorrectoComponent,
    NuevoDispositivoComponent,
    FeedbackComponent,
    ActivarDesactivadarAlertasComponent,
    ActivarAlertasComponent,
    DesactivarAlertasComponent,
    DeviceInfoComponent,
    IniciarSeccionComponent,
    HomeComponent,
    ConfiguracionComponent,
    DatosPersonalesComponent,
    ContrasenaComponent,
    AlertasComponent,
    ReporteComponent,
    AddDeviceComponent,
    VerifyDeviceComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
