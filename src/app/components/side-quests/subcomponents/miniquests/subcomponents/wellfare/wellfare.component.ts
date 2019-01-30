import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../../../../../services/attributes.service';

@Component({
  selector: 'app-wellfare',
  templateUrl: './wellfare.component.html',
  styleUrls: ['../../../../../travel-screen/travel-screen.component.css']
})
export class WellfareComponent implements OnInit {

  storyProgress: number = 0;
  donations: number = 0;
  times: number = 0;
  character = this._attributes.currentClass;
  wellWishes = [
    'Considering this, you opt to:',
    'You feel a refreshing breeze behind you as the coins clank along the walls of the well. Coincidence?  Its hard to say.'
  ];

  constructor(private _attributes: AttributesService, private router: Router) { }

  ngOnInit() {
  }

  steal() {
    this.storyProgress += 1;
    this.character.setInjury(1, 2);
    this.character.inventory.setGold(this.character.inventory.getGold() + 20);
  }

  donate(num) {
    this.donations += num;
    this.times = 1;
    this.character.inventory.setGold(this.character.inventory.getGold() - num);
    if (this.donations >= 100) {
      this.character.inventory.setTreasure(this.character.inventory.getTreasure() + 100);
      this.character.inventory.setGold(this.character.inventory.getGold() + this.donations);
    }
  }

}
