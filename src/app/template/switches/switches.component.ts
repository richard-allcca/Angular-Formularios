import { Component, ViewChild } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';

@Component({
   selector: 'app-switches',
   templateUrl: './switches.component.html',
   styles: [
   ]
})
export class SwitchesComponent {

   @ViewChild('switchesForm') switchesForm!: NgForm

   get errores(): ValidationErrors | null {
      return this.switchesForm?.controls['terminos']?.errors;
   }

   constructor() { }

   persona = {
      genero: 'F',
      notificaciones: true
   }

   terminosYcondiciones: boolean = false;

}
