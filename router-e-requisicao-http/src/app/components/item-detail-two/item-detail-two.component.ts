import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/Character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-item-detail-two',
  templateUrl: './item-detail-two.component.html',
  styleUrls: ['./item-detail-two.component.css']
})

export class ItemDetailTwoComponent implements OnInit {
  character?: Character;

  constructor(
    private service: CharactersService,
    private route: ActivatedRoute
  ) { this.getCharacter() }

  ngOnInit(): void {
  }

  getCharacter() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getItem(id).subscribe(
      (character) => (this.character = character)
    );
  }

}
