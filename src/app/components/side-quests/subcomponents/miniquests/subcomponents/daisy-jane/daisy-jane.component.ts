import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../../../../../services/attributes.service';

@Component({
  selector: 'app-daisy-jane',
  templateUrl: './daisy-jane.component.html',
  styleUrls: ['../../../../../travel-screen/travel-screen.component.css', './daisy-jane.component.css']
})
export class DaisyJaneComponent implements OnInit {

  characterClass = this._attributes.currentClass.getClass();
  storyProgress: number = 0;
  struggle: boolean = false;
  escapePercent: number = 0;
  spell: string = '';

  constructor(private _attributes: AttributesService, private router: Router) { }

  ngOnInit() {
  }

  free() {
    this._attributes.currentClass.setHp(this._attributes.currentClass.getHp() - 1);
    this.struggle = true;
  }

  escape() {
    let progress = (Math.floor(Math.random() * 10) + 1) * this._attributes.currentClass.getHp();
    this.escapePercent += progress;
    console.log(progress);
    this._attributes.currentClass.setHp(this._attributes.currentClass.getHp() - 1);
    if (this.escapePercent >= 100) {
      this.storyProgress = 12;
    }
  }

  breakSpell() {
    if (this.spell.toLowerCase() === "could you possibly") {
      this.storyProgress = 23;
    } else {
      this._attributes.currentClass.setHp(this._attributes.currentClass.getHp() - 1);
      this.struggle = true;
    }
    console.log(this.spell);
  }

  reward() {
    this.storyProgress = 24;
    this._attributes.currentClass.inventory.setTreasure(this._attributes.currentClass.inventory.getTreasure() + 250);
  }

}
