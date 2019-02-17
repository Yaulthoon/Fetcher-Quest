import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../../../../../services/attributes.service';

@Component({
  selector: 'app-slow-gatherspot',
  templateUrl: './slow-gatherspot.component.html',
  styleUrls: ['../../../../../travel-screen/travel-screen.component.css', './slow-gatherspot.component.css']
})
export class SlowGatherspotComponent implements OnInit {

  storyProgress: number = 0;
  gatherChance: number = 90;
  gatheredSupplies: number = 0;
  characterClass = this._attributes.currentClass.getClass();

  constructor(private _attributes: AttributesService, private router: Router) { }

  ngOnInit() {
    if (this.characterClass === 'Mercenary' || this.characterClass === 'Druid') {
      this.gatherChance += 10;
    }
  }

  gather() {
    let chance = Math.floor(Math.random() * 100) + 1;
    console.log('Roll: ' + chance + '. Versus failure chance: ' + this.gatherChance);
    if (chance < this.gatherChance) {
      this._attributes.currentClass.inventory.setTreasure(this._attributes.currentClass.inventory.getTreasure() + 50);
      this.gatheredSupplies += 2;
      this.gatherChance -= 10;
    } else {
      this.storyProgress += 1;
    }
  }

  intimidate() {
    let chance = Math.floor(Math.random() * 100) + 1;
    if (this.characterClass === 'Barbedbarian') {
      chance += 10;
      console.log('barbed boost');
    }
    if (chance > 60) {
      this.storyProgress = 20;
    } else {
      console.log('intimidate failed');
      this.storyProgress = 3;
      this._attributes.currentClass.setHp(this._attributes.currentClass.getHp() - 2);
    }
  }

  mauled() {
    if (this.storyProgress === 2) {
      this.storyProgress++;
      this._attributes.currentClass.setHp(this._attributes.currentClass.getHp() - 2);
    } else {
      this._attributes.currentClass.setHp(this._attributes.currentClass.getHp() - 2);
    }
  }

  struggle(damage, progress) {
    let character = this._attributes.currentClass;
    let injury = this._attributes.currentClass.getInjury();
    character.setInjury(injury.damage + damage, injury.turns + 2);
    this.storyProgress += progress;
  }

}
