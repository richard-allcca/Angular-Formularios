import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
   selector: '[customMin][ngModel]',
   providers: [{
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true
   }]
})
export class CustomMinDirective implements Validator {

   @Input() minimo!: number;

   constructor() { }

   validate(control: FormControl) {
      const inputValue = control.value;
      return (inputValue < this.minimo)
         ? { 'customMin': true }
         : null;
   }

}

// NOTE - Selector, indica que solo se puede usar esta directiva si tiene [customNombre] y [ngModel]

// NOTE - Debes "declarar" este archivo en el modulo donde lo vas a usar en este caso es en (template.module)

// NOTE - Si quieres que esta clase extienda al formulario debe implementar el "Validator" ln 12, que sirve para hacer validaciones 