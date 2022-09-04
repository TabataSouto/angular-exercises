import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  /* colocamos a exclamação para dizer que a propriedade declarada
  será inicializada de alguma maneira, ou sejá, terá seu valor.
  Isso porque o Angular não entede que a propriedade tem seu valor
  inicializado no componente pai, e espera essa inicialização no
  componente filho. */
  @Input () name!: string;
  @Input () data!: { email: string, role: string};

  constructor() { }

  ngOnInit(): void {
  }

}
