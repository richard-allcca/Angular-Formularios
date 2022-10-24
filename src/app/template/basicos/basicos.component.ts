import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
   selector: 'app-basicos',
   templateUrl: './basicos.component.html',
   styles: [
   ]
})
export class BasicosComponent implements OnInit {

   @ViewChild('miFormulario') miFormulario!: NgForm;

   constructor() { }

   ngOnInit(): void {
   }


   // REVIEW - "?" para evitar el undefined por que lee la función antes de inializar

   nombreValido(): boolean {
      return this.miFormulario?.controls['producto']?.invalid &&
         this.miFormulario?.controls['producto']?.touched
   }

   precioValido(): boolean {
      return this.miFormulario?.controls['precios']?.invalid &&
         this.miFormulario?.controls['precios']?.touched
   }

   guardar() {
      console.log(this.miFormulario);
   }
}
