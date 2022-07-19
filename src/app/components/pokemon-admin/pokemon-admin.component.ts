import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon-admin',
  templateUrl: './pokemon-admin.component.html',
  styleUrls: ['./pokemon-admin.component.scss']
})
export class PokemonAdminComponent implements OnInit {

  pokemonList = [];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.loadDataTable()
  }

  loadDataTable() {
    this.pokemonService.getListPokemon().subscribe({
      next: (data) => {
        this.pokemonList = data
        console.log(this.pokemonList)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  setFilter(row: any) {
    console.log(row)
  }



}
