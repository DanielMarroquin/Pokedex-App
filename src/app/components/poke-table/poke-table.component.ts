import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { PokemonService } from "../../services/pokemon.service";
import { MatTableDataSource } from "@angular/material/table";

let ColumnMode;

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {
  // @ts-ignore
  @ViewChild('editTmpl', { static: true }) editTmpl: TemplateRef<any>;
  // @ts-ignore
  @ViewChild('hdrTpl', { static: true }) hdrTpl: TemplateRef<any>;
  data = [];
  columns = [];

  // ColumnMode = ColumnMode;

  pokemonList = [];
  displayedColumns: string[] = ['position', 'image', 'name'];
  dataSource = new MatTableDataSource<any>(this.data);
  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.columns =  [

    ]

    this.loadDataTable();
  }



  loadDataTable() {
    let pokemonData: any;
    this.pokemonService.getListPokemon().subscribe({
      next: (data: any) => {
        this.pokemonList = data
        this.dataSource = new MatTableDataSource<any>(this.data);
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

}
