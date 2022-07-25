import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Pokemon} from "../core/models/pokemon-admin";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http:HttpClient
  ) { }

  createPokemon(id: number = 2): Observable<any> {
    const params = {
      idAuthor: id
    }
    return this.http.post<any>(environment.api, { params})
  }

  getListPokemon(id: number = 2): Observable<any> {
    const params = {
      idAuthor: id
    }
    return this.http.get<any>(environment.api, { params } )
  }

  getPokemonById(id: any): Observable<any> {
    return this.http.get(`${environment.api}/${id}`)
  }

  deletePokemon(id: any): Observable<any> {
    return this.http.delete(`${environment.api}/${id}`)
  }

  editPokemon(id: any ): Observable<any> {
    return this.http.get<any>(`${environment.api}/${id}`)
  }

}
