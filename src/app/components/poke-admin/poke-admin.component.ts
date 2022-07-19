import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import { PokeServiceService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-poke-admin',
  templateUrl: './poke-admin.component.html',
  styleUrls: ['./poke-admin.component.scss']
})
export class PokeAdminComponent implements OnInit {
  // @ts-ignore
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  temp = [];
  dataSource = new MatTableDataSource<any>(this.data);

  constructor(
    private pokemonService: PokeServiceService
  ) { }

  ngOnInit(): void {
    this.loadTableData();
  }

  loadTableData() {
    this.pokemonService.getListPokemon().subscribe({
      next: (data) => {
        this.temp = data;
        console.log(this.temp, 'temp')
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  applyFilter() {

  }

  setFilter(inputSearch: any) {
    const {value} = inputSearch.target;
    this.searchFilters(value.toLowerCase().trim());
  }

  searchFilters(value: any) {

  }

  editPokemon(row: any){
    console.log(row)
  }

  deletePokemon(row: any){
    console.log(row)
  }

}
