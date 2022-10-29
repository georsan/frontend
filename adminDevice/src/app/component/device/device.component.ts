import { Component, OnInit,Input } from '@angular/core';
import { deviceInfo } from 'src/app/model/deviceInfo.model';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @Input() infoDevice:deviceInfo={
    id: '',
    nombre: '',
    ts: '',
    bateria: 0,
    corriente: '',
    senal: '',
    humedad: 0,
    temperatura: 0,
    modelo: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
