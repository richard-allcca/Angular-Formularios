import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
   nombre: string;
   favoritos: Favorito[];
}
interface Favorito {
   id: number;
   nombre: string;
}

@Component({
   selector: 'app-dinamicos',
   templateUrl: './dinamicos.component.html',
   styles: [
   ]
})
export class DinamicosComponent {

   @ViewChild('dinamicForm') dinamicForm!: NgForm

   nuevoJuego: string = '';

   persona: Persona = {
      nombre: "Richard",
      favoritos: [
         { id: 1, nombre: "Metal Gear" },
         { id: 2, nombre: "Yu Gi Oh!" }
      ]
   }

   constructor() { }


   nombreValido(): boolean {
      return this.dinamicForm?.controls['nombre']?.invalid
         && this.dinamicForm?.controls['nombre']?.touched;
   }

   agregarJuego() {
      const nuevoFavorito: Favorito = {
         id: this.persona.favoritos.length + 1,
         nombre: this.nuevoJuego
      }

      this.persona.favoritos.push({ ...nuevoFavorito });
      this.nuevoJuego = "";
   }

   guardar() {

   }

   eliminar(index: number) {
      this.persona.favoritos.splice(index, 1);
   }

}
