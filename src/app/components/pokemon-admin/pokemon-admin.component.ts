import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon-admin',
  templateUrl: './pokemon-admin.component.html',
  styleUrls: ['./pokemon-admin.component.scss']
})
export class PokemonAdminComponent implements OnInit {


  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {

  }


  setFilter(row: any) {
    console.log(row)
  }



}
