import { Component } from '@angular/core';
import { map } from 'rxjs';
import { PelucheService } from '../services/peluche.service';
import { IPeluche } from '../interfaces/peluche';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  listaPeluches: IPeluche[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  IDPelucheActual: number = 0;
  nombrePeluche: string = "";
  precioPeluche: number = 0;
  descripcionPeluche: string = "";
  imagenPeluche: string = "";


  constructor(private _pelucheService: PelucheService) {
    this.obtener3Peluches();
  }

  obtener3Peluches() {
    this._pelucheService.getList().pipe(
      map(data => data.slice(3, 6))
    ).subscribe({
      next: (data) => {
        this.listaPeluches = data;
        this.isResultLoaded = true;
      },
      error: (e) => { console.log(e) }
    });
  }

}
