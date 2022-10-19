import { Component, OnInit } from '@angular/core';
import { Film } from '../film.model';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {

  constructor(private filmService: FilmService) { }

  items: Film[] = [];

  ngOnInit() {
    this.filmService.getFilms().subscribe(
      res => {
        this.items = res;
      },
      err => {
        //TODO! Gestire errore...
      }
    );
  }

}
