import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-crear-trabajo-form',
  templateUrl: './crear-trabajo-form.component.html',
  styleUrls: ['./crear-trabajo-form.component.scss']
})
export class CrearTrabajoFormComponent implements OnInit {
  crearForm = new FormGroup({
    fecha : new FormControl(''),
    placa : new FormControl(''),
    tipo : new FormControl(''),
    marca : new FormControl(''),
    propietario : new FormControl(''),
    servicio : new FormGroup({
    lavado : new FormControl(''),
    costoLavado : new FormControl(''),
    brillado : new FormControl(''),
    costoBrillado : new FormControl('')
    })
   });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.crearForm.value);
  }

}
