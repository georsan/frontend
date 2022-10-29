import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-dispositivo',
  templateUrl: './nuevo-dispositivo.component.html',
  styleUrls: ['./nuevo-dispositivo.component.scss']
})
export class NuevoDispositivoComponent implements OnInit {

  inputs=[
    {
      'icono':'badge',
      'titulo':'Nombre',
      'type':'text'
    },
    {
      'icono':'edit',
      'titulo':'Descripción',
      'type':'text'
    },
    {
      'icono':'location_on',
      'titulo':'Latitud',
      'type':'text'
    }
    ,
    {
      'icono':'location_on',
      'titulo':'Longitud',
      'type':'text'
    }
    ,
    {
      'icono':'mail',
      'titulo':'Correo para notificaciones',
      'type':'text'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
