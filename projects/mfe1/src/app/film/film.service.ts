import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Film } from './film.model';

@Injectable()
export class FilmService {

    constructor(private http: HttpClient) { }
    
    getFilms() : Observable<Film[]> {
        return this.http.get<Film[]>('http://localhost:3000/assets/films.json');
    }
}