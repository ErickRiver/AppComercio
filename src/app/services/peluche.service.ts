import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { IPeluche } from '../interfaces/peluche';

@Injectable({
  providedIn: 'root'
})
export class PelucheService {
  private endpoint: string = environment.endPoint;
  private apiUrl: string = this.endpoint + "Peluches/";

  constructor(private http: HttpClient) { }

  //Método para invocar al endpoint de Lista de Peluches
  getList(): Observable<IPeluche[]> {
    return this.http.get<IPeluche[]>(`${this.apiUrl}ListaPeluches`);
  }

  getListPorCategoria(idCategoria: number): Observable<IPeluche[]> {
    return this.http.get<IPeluche[]>(`${this.apiUrl}ListaPeluches/${idCategoria}`);
  }
  
}