import { Component, OnInit } from '@angular/core';

import { ListService } from 'src/app/services/list.service';
import { Animal } from 'src/app/interfaces/Animal';

@Component({
  selector: 'app-render-list',
  templateUrl: './render-list.component.html',
  styleUrls: ['./render-list.component.css']
})
export class RenderListComponent implements OnInit {

  animals: Animal[] = [];

  constructor(private listService: ListService) { 
    this.getAnimal();
   }

  ngOnInit(): void {
  }

  getAnimal() {
    /* Quando um evendo é "observável", não podemos siplesmente
    atribuir a resposta da requisição em um atributo declarado.
    Ao colocarmos "subscribe" depois do método declarado no
    service, estamos dizendo que o evento será concretizado,
    como se ele estivesse esperando esse evento para realizar
    alguma coisa. */
    /* O "subscribe" nos permite fazer algo com as propriedades
    do componente em questão, sendo assim, é declarada uma função
    anonima que nos permite atribuir a variável declarada como
    um array vazio, o resultado da observação do subscribe. */
    this.listService.getAllAnimals().subscribe((animals) => this.animals = animals);
  }

}
