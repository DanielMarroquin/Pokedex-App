import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http:HttpClient
  ) { }

  getListPokemon(id: number = 2): Observable<any>{
    const params = {
      idAuthor: id
    }
    return this.http.get<any>(environment.api, { params } )
  }
}
