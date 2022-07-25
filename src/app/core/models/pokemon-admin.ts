import {Validators} from "@angular/forms";

export interface Pokemon  {
  id?: string;
  name?: string;
  type: string;
  image: string;
  attack?: string;
  defense?: string;

}

export function formModel (data?: Pokemon){
  return{
    type: 'rows',
    inputs: [
      {
        row:1,
        type: 'input',
        inputType: 'text',
        label: 'Nombre',
        name: 'name',
        required: true,
        validation: [Validators.required],
        value: data? data.name : null
      },
      {
        row:1,
        type: 'input',
        inputType: 'text',
        label: 'Imagen',
        name: 'image',
        required: true,
        validation: [Validators.required],
        value: data? data.image : null
      },
      {
        row: 2,
        type: 'input',
        inputType: 'text',
        label: 'Ataque',
        name: 'attack',
        required: true,
        validation: [Validators.required],
        value: data? data.attack : null
      },
      {
        row: 2,
        type: 'input',
        inputType: 'text',
        label: 'Defensa',
        name: 'defense',
        required: true,
        validation: [Validators.required],
        value: data? data.defense : null
      },


    ]
  }
}


