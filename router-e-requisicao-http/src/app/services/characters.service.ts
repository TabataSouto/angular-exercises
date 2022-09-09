import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/Character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private url = 'https://www.moogleapi.com/api/v1/characters';

  constructor(private http: HttpClient) { }

  getRandomCharacter(): Observable<Character[]> {
    return this.http.get<Character[]>(this.url);
  }

  getItem(id: number): Observable<Character>{
    return this.http.get<Character>(`${this.url}/${id}`);
  }
}
