import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/Character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  character!: Character;

  constructor(private server: CharactersService) {  
    this.getRandomCharacters();
   }

  ngOnInit(): void {
  }

  getRandomCharacters() {
    this.server.getRandomCharacter().subscribe(
      (character) => this.character = character
    )
  }
}
