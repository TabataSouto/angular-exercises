import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  name: string = '';
  hobbie: string = '';
  age: number = 0;

  showInfos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void { 
    if (!this.name || !this.age || !this.hobbie) {
      this.showInfos = false;
    } else {
      this.showInfos = true;
    }
  }

}
