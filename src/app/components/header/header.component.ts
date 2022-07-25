import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormModalPokemonComponent} from "../pokemon-admin/component/form-modal-pokemon/form-modal-pokemon.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private modalPokemon: MatDialog,

  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.modalPokemon.open(FormModalPokemonComponent, {
      width: '55%'
    });
  }

  home() {
    this.router.navigateByUrl('/home');
  }

}
