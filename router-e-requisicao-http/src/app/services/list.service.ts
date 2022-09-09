import { Injectable } from '@angular/core';

import { Animal } from '../interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/* Faz com que a requisição ocorra de melhor maneira possível,
resumindo, ele irá observar se a requisição ocorre da maneira
correta. Por isso o método é tipado como Observable<Animal[]>;
para saber se a requisição que é um array de animais com a
estrutura da interface ocorre corretamente. */
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  private apiURL = 'http://localhost:3000/animals';

  /* o atributo http declarado no constructor é
  quem terá os métodos get, post, put, etc. */
  constructor(private http: HttpClient) { }

  /* Esse é um evento de observação, mas o angular
  também precisa entender o que é recebido. Para isso
  passamos também o generic para o GET. */
  getAllAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiURL);
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiURL}/${id}`);
  }

  removeAnimal(id: number) {
    return this.http.delete<Animal>(`${this.apiURL}/${id}`);
  }
}
