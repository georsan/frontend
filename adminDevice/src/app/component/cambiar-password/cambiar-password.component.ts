import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.scss']
})
export class CambiarPasswordComponent implements OnInit {

  inputs=[
    {
      'icono':'description',
      'titulo':'Codigo de verificación',
      'type':'number'
    },
    {
      'icono':'key',
      'titulo':'Nueva contraseña',
      'type':'password'
    },
    {
      'icono':'key',
      'titulo':'Confirmar contraseña',
      'type':'password'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
