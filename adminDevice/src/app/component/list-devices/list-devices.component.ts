import { Component, OnInit } from '@angular/core';
import { deviceInfo } from 'src/app/model/deviceInfo.model';
@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.scss']
})
export class ListDevicesComponent implements OnInit {

  listDevice:deviceInfo[]=[
    {
      'id':'E2_00004',
      'nombre':'Nirvana/Santa Rita/',
      'modelo':'EVA Clima',
      'ts':'HACE 10 MINUTOS',
      'bateria':10,
      'corriente':'OFF',
      'senal':'BAJA',
      'humedad':20,
      'temperatura':30

    },{
      'id':'E2_00005',
      'nombre':'Vista Hermosa/Cantagallos',
      'modelo':'EVA Clima',
      'ts':'HACE UNOS SEGUNDOS',
      'bateria':100,
      'corriente':'ON',
      'senal':'ALTA',
      'humedad':20,
      'temperatura':10

    },{
      'id':'E2_00005',
      'nombre':'Vista Hermosa/Cantagallos',
      'modelo':'EVA Clima',
      'ts':'HACE 1 MINUTO',
      'bateria':100,
      'corriente':'ON',
      'senal':'ALTA',
      'humedad':20,
      'temperatura':10

    },{
      'id':'E2_00005',
      'nombre':'Vista Hermosa/Cantagallos',
      'modelo':'EVA Clima',
      'ts':'HACE 1 MINUTO',
      'bateria':100,
      'corriente':'ON',
      'senal':'ALTA',
      'humedad':20,
      'temperatura':10

    },{
      'id':'E2_00005',
      'nombre':'Vista Hermosa/Cantagallos',
      'modelo':'EVA Clima',
      'ts':'HACE 1 MINUTO',
      'bateria':100,
      'corriente':'ON',
      'senal':'ALTA',
      'humedad':20,
      'temperatura':10

    }
    ,{
      'id':'E2_00005',
      'nombre':'Vista Hermosa/Cantagallos',
      'modelo':'EVA Clima',
      'ts':'HACE 1 MINUTO',
      'bateria':100,
      'corriente':'ON',
      'senal':'ALTA',
      'humedad':20,
      'temperatura':10

    }
    ,{
      'id':'E2_00005',
      'nombre':'Vista Hermosa/Cantagallos',
      'modelo':'EVA Clima',
      'ts':'HACE 1 MINUTO',
      'bateria':100,
      'corriente':'ON',
      'senal':'ALTA',
      'humedad':20,
      'temperatura':10

    }




  ];
  constructor() { }

  ngOnInit(): void {
  }

}
