import { Component, OnInit,inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  constructor(public diaLog:MatDialog) { }

  ngOnInit(): void {
  }

}
