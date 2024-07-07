import { Component } from '@angular/core';
import { IPeluche } from '../interfaces/peluche';
import { PelucheService } from '../services/peluche.service';
import { debounceTime, map, Subject } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  listaPeluches: IPeluche[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  searchSubject: Subject<string> = new Subject();

  IDPelucheActual: number = 0;
  nombrePeluche: string = "";
  precioPeluche: number = 0;
  descripcionPeluche: string = "";
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

  obtenerPeluchesTipo(idCategoria: number): void {
    this._pelucheService.getListPorCategoria(idCategoria).subscribe({
      next: (data) => {
        this.listaPeluches = data;
        this.isResultLoaded = true;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  obtenerPeluche(data: IPeluche) {
    this.IDPelucheActual = data.idPeluche;
    this.nombrePeluche = data.nombre;
    this.descripcionPeluche = data.descripcion;
    this.precioPeluche = data.precio;
    this.imagenPeluche = data.imagen;
  }

  ngOnInit(): void {
    this.obtenerPeluches();

    this.searchSubject.pipe(
      debounceTime(300)  // Espera 300ms después de la última pulsación de tecla antes de emitir el valor
    ).subscribe(searchText => {
      this.filterPeluches(searchText);
    });
  }
  
  onSearchChange(searchText: string): void {
    this.searchSubject.next(searchText);
  }

  filterPeluches(searchText: string): void {
    if (!searchText) {
      // Si el campo de búsqueda está vacío, obten todos los peluches de nuevo
      this.obtenerPeluches();
    } else {
      this.listaPeluches = this.listaPeluches.filter(peluche => 
        peluche.nombre.toLowerCase().includes(searchText.toLowerCase()));
    }
  }
}
