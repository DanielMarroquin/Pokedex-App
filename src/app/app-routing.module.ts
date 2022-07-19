import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonAdminComponent} from "./components/pokemon-admin/pokemon-admin.component";

const routes: Routes = [
  {path: 'home', component: PokemonAdminComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
