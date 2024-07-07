import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { IPeluche } from './interfaces/peluche';
import { PelucheService } from './services/peluche.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listaPeluches: IPeluche[] = [];

  isResultLoaded = false;
  isUpdateFormActive = false;

  IDPelucheActual: number = 0;
  nombrePeluche: string = "";
  descripcionPeluche: string = "";
  precioPeluche: number = 0;
  imagenPeluche: string = "";
  

  constructor(private _pelucheService: PelucheService) {
    this.obtenerPeluches();
  }
  obtenerPeluches() {
    this._pelucheService.getList().subscribe({
      next: (data) => {
        this.listaPeluches = data;
        this.isResultLoaded = true;
      }, error: (e) => { console.log(e) }
    });
  }
  
  obtenerTarea(data: IPeluche) {
    this.IDPelucheActual = data.idPeluche;
    this.nombrePeluche = data.nombre;
    this.descripcionPeluche = data.descripcion;
    this.precioPeluche = data.precio;
    this.imagenPeluche = data.imagen;
  }
}