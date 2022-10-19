import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  ///Qui si definisce il percorso (remoto) per il caricamento del modulo in lazy load
  //Il funzionamento è identico a quello di un modulo caricato in lazy load compilato nello stesso progetto
  {
    path: 'film',
    loadChildren: () => import('mfe1/Module').then(m => m.FilmModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
