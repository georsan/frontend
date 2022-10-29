import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent implements OnInit {
  @Input()volver="";
  constructor() { }

  ngOnInit(): void {
  }

}
