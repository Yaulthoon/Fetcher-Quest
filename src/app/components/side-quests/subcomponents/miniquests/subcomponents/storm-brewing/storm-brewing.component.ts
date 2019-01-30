import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../../../../../services/attributes.service';

@Component({
  selector: 'app-storm-brewing',
  templateUrl: './storm-brewing.component.html',
  styleUrls: ['../../../../../travel-screen/travel-screen.component.css', './storm-brewing.component.css']
})
export class StormBrewingComponent implements OnInit {

  storyProgress: number = 0;
  consequence: number = 0;
  character = this._attributes.currentClass.getClass();

  constructor(private _attributes: AttributesService, private router: Router) { }

  ngOnInit() {
    console.log(this.character);
  }

  riskIt() {
    this.consequence = Math.floor(Math.random() * 100) + 1;
    if (this.character === 'Zealot') {
      this.consequence += 10;
      console.log('zealot power activated');
    }
    console.log(this.consequence);
    if (this.consequence <= 38) {
      this._attributes.currentClass.setHp(this._attributes.currentClass.getHp() - 2);
      this._attributes.currentClass.inventory.setSupplies(this._attributes.currentClass.inventory.getSupplies() - 4);
    } else if (this.consequence > 38 && this.consequence <= 75) {
      this._attributes.currentClass.setHp(this._attributes.currentClass.getHp() - 1);
      this._attributes.currentClass.inventory.setSupplies(this._attributes.currentClass.inventory.getSupplies() - 2);
    }
    this.storyProgress = 10;
  }

  shelter(pace) {
    if (pace === 3) {
      this._attributes.progressDistance -= 20;
    } else if (pace === 2) {
      this._attributes.progressDistance -= 8;
    } else {
      this._attributes.progressDistance -= 1;
    }
    this.storyProgress += 1;
  }

  eatMushrooms() {
    if (this.character === 'Mercenary') {
      this._attributes.currentClass.setHp(this._attributes.currentClass.getHp() + 2);
      this._attributes.currentClass.inventory.setSupplies(this._attributes.currentClass.inventory.getSupplies() + 2);
    }
    this.storyProgress = 3;
  }

  snakes(decide) {
    let injury = this._attributes.currentClass.getInjury();
    if (decide === 'punch') {
      this._attributes.currentClass.setHp(this._attributes.currentClass.getHp() - 1);
      this.storyProgress += 1;
    }
    this._attributes.currentClass.setInjury(injury.damage + 1, injury.turns + 1);
    this.storyProgress += 1;
  }

}
