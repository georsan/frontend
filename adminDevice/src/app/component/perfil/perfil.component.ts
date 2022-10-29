import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  inputs=[
    {
      'icono':'badge',
      'titulo':'Nombre',
      'type':'text'
    },
    {
      'icono':'mail',
      'titulo':'Correo',
      'type':'text'
    },
    {
      'icono':'call',
      'titulo':'Telefono',
      'type':'tel'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
