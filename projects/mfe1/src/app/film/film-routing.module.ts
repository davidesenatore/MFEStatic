import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmSearchComponent } from './film-search/film-search.component';

const FILM_ROUTES: Routes = [
    {
      path: 'film-search',
      component: FilmSearchComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(FILM_ROUTES)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }