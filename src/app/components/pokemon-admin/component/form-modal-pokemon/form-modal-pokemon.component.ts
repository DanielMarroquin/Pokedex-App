import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-modal-pokemon',
  templateUrl: './form-modal-pokemon.component.html',
  styleUrls: ['./form-modal-pokemon.component.scss']
})
export class FormModalPokemonComponent implements OnInit {
  pokemonForm!: FormGroup;
  action = 'Nuevo';

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.pokemonForm = this.formBuilder.group({

    })
  }

  onSubmit() {

  }
}
