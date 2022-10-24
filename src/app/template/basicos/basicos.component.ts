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


   initialForm = { // dar valores iniciales con ngModel
      // producto: 'Nombre',
      precio: 0,
      existencia: 0
   }

   constructor() { }

   ngOnInit(): void {
   }



   nombreValido(): boolean {
      // "?" para evitar el undefined por que lee la función antes de inializar
      return this.miFormulario?.controls['producto']?.invalid &&
         this.miFormulario?.controls['producto']?.touched
   }

   precioValido(): boolean {
      return this.miFormulario?.controls['precios']?.invalid &&
         this.miFormulario?.controls['precios']?.touched
   }

   customDirective() {
      return this.miFormulario?.controls['existencias']?.errors
   }

   guardar() {
      console.log('Posteo correcto');

      // this.miFormulario.resetForm();// reseteo basico de todo el formulario

      this.miFormulario.resetForm({
         // producto: 'aqui el producto',
         precio: 0,
         existencias: 0
      });// reseteo y asignación de valor en input especificos
   }

}

