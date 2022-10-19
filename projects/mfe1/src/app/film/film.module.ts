import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FilmRoutingModule } from "./film-routing.module";
import { FilmSearchComponent } from "./film-search/film-search.component";
import { FilmService } from "./film.service";

@NgModule({
    declarations: [
        FilmSearchComponent
    ],
    imports: [
      CommonModule,
      FilmRoutingModule,
      HttpClientModule
    ],
    providers: [
        FilmService
    ]    
  })
  export class FilmModule { }