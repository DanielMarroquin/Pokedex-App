import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { PokemonService } from "../../services/pokemon.service";
import { MatTableDataSource } from "@angular/material/table";
import Swal from 'sweetalert2'

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
  rows = [];
  columns = [];

  // ColumnMode = ColumnMode;

  pokemonList = [];
  dataSource = new MatTableDataSource<any>(this.data);
  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.loadDataTable();
  }

  editPokemon(row: any) {
    console.log(row)
  }


  deletePokemon(row: any){
    console.log(row, 'row')
    Swal.fire({
      title: '¿Desea eliminar el Pokemon?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText:'No, Gracias'
    }).then((value:any) => {
      if(value.isConfirmed){
        this.pokemonService.deletePokemon({id: row.id }).subscribe({
          next: ()=> {
            console.log(row.id, 'id')
            this.loadDataTable();
          },
          error: err =>{
            console.log(err, 'Error al cargar los datos')
          }
        })
      }
    })
  }



  loadDataTable() {
    this.pokemonService.getListPokemon().subscribe({
      next: (data: any) => {
        this.pokemonList = data
        this.rows = data
        this.dataSource = new MatTableDataSource<any>(this.data);
      },
      error: (err: any) => {
        console.log(err, 'Error al cargar los datos')
      }
    })
  }


}
