import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() titulo='';
  @Input() icono='';
  @Input() type='';
  constructor() { }

  ngOnInit(): void {
  }

}
