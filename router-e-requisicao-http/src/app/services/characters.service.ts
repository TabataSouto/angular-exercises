import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/Character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private url = 'https://www.moogleapi.com/api/v1/characters/random';

  constructor(private http: HttpClient) { }

  getRandomCharacter(): Observable<Character> {
    return this.http.get<Character>(this.url);
  }
}
