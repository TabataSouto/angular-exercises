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

  removeAnimal(animal: Animal) {
    /* Nesse caso, o filter é necessário para que a atualização
    em tempo real ocorra. Do contrário, o "item" será removido
    do banco de dados, mas para que isso seja refletido na aplicação,
    seria necessário recarregar a página. Com o filter, não é
    preciso esse recarregamento. */
    this.animals = this.animals.filter((a) => a.name != animal.name);
    this.listService.removeAnimal(animal.id).subscribe();
  }
}
