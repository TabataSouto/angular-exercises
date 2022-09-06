import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  // método que será chamando no evento de click em nosso template;
  showMessage(): void {
    /* efeito toggle, faz a inversão do valor sempre que o botão
    for clicando, transformando true em false e false em true. */
    this.show = !this.show;
  }

}
