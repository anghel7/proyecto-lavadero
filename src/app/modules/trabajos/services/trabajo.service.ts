import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  constructor() { }

  createTrabajo(): Observable<any> {
    return of(undefined);
  }

  listTrabajos(): Observable<any[]> {
    return of([
      {
        numero: 1,
        fecha: '02/12/2020',
        propietario: 'Juan peres',
        tipo: 'moto',
        marca: 'toyota',
        placa: '124ae',
        servicio: 'brillado',
        costo: 20
      },
      {
        numero: 2,
        fecha: '02/12/2020',
        propietario: 'sonia peres',
        tipo: 'vagoneta',
        marca: 'nissan',
        placa: '224ae',
        servicio: 'lavado motor',
        costo: 30
      },
      {
        numero: 3,
        fecha: '02/12/2020',
        propietario: 'pablo peres',
        tipo: 'taxi',
        marca: 'toyota',
        placa: 'car12',
        servicio: 'brillado',
        costo: 20
      },
      {
        numero: 4,
        fecha: '02/12/2020',
        propietario: 'saul peres',
        tipo: 'moto',
        marca: 'dar',
        placa: '78jk',
        servicio: 'motor',
        costo: 35
      },
      {
        numero: 5,
        fecha: '02/12/2020',
        propietario: 'carmen peres',
        tipo: 'trufi',
        marca: 'toyota',
        placa: '145ae',
        servicio: 'secado',
        costo: 15
      },
      {
        numero: 6,
        fecha: '02/12/2020',
        propietario: 'sole peres',
        tipo: 'camioneta',
        marca: 'toyota',
        placa: 'car7ae',
        servicio: 'brillado',
        costo: 15
      },
      {
        numero: 7,
        fecha: '02/12/2020',
        propietario: 'henry peres',
        tipo: 'taxi',
        marca: 'nissan',
        placa: '65ter',
        servicio: 'secado',
        costo: 25
      },
      {
        numero: 8,
        fecha: '02/12/2020',
        propietario: 'fani peres',
        tipo: 'taxi',
        marca: 'mot',
        placa: 'tom4',
        servicio: 'completo',
        costo: 30
      },
      {
        numero: 9,
        fecha: '02/12/2020',
        propietario: 'fercho peres',
        tipo: 'taxi',
        marca: 'toyota',
        placa: '89ae',
        servicio: 'brillado',
        costo: 20
      },
      {
        numero: 10,
        fecha: '02/12/2020',
        propietario: 'walas peres',
        tipo: 'taxi',
        marca: 'toyota',
        placa: 'ker45',
        servicio: 'brillado',
        costo: 25
      },
    ]);
  }

  listTrabajosElectron(): any {
    return undefined;
  }

}
