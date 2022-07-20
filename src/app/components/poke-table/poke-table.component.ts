import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../../services/pokemon.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

  pokemonList = [];
  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.loadDataTable();
  }



  loadDataTable() {
    let pokemonData: any;
    this.pokemonService.getListPokemon().subscribe({
      next: (data: any) => {
        this.pokemonList = data
        this.data.push(pokemonData)
        this.dataSource = new MatTableDataSource<any>(this.data);
        console.log(this.pokemonList)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

}
