import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../../../../../services/attributes.service';

@Component({
  selector: 'app-forest-shortcut',
  templateUrl: './forest-shortcut.component.html',
  styleUrls: ['../../../../../travel-screen/travel-screen.component.css']
})
export class ForestShortcutComponent implements OnInit {

  storyProgress = 0;
  hurt: boolean = false;
  currentClass = this._attributes.currentClass.getClass();
  injuries = this._attributes.currentClass.getInjury();

  constructor(private _attributes: AttributesService, private router: Router) { }

  ngOnInit() {
    console.log(this._attributes.currentClass.getInjury());
  }

  rush() {
    let chance = Math.floor(Math.random() * 100) + 1;
    if (this.currentClass === 'Druid') {
      chance += 10;
    }
    console.log(chance);
    if (chance > 50 || this.currentClass === 'Rogue') {
      if (this._attributes.progressDistance + 10 > this._attributes.currentPath) {
        this._attributes.progressDistance = this._attributes.currentPath;
      } else {
        this._attributes.progressDistance += 10;
      }
    } else {
      this.hurt = true;
      if (this._attributes.progressDistance + 5 > this._attributes.currentPath) {
        this._attributes.progressDistance = this._attributes.currentPath;
      } else {
        this._attributes.progressDistance += 5;
      }
      this._attributes.currentClass.setInjury(this.injuries.damage + this._attributes.progressSpeed, this.injuries.turns + this._attributes.progressSpeed);
    }
    this.storyProgress += 1;
  }

  caution() {
    let chance = Math.floor(Math.random() * 100) + 1;
    if (this.currentClass === 'Druid') {
      chance += 10;
    }
    if (chance > 40) {
      if (this._attributes.progressDistance + 5 > this._attributes.currentPath) {
        this._attributes.progressDistance = this._attributes.currentPath;
      } else {
        this._attributes.progressDistance += 5;
      }
      this._attributes.currentClass.inventory.setSupplies(this._attributes.currentClass.inventory.getSupplies() + 2);
    } else {
      this.hurt = true;
      this._attributes.progressDistance -= 5;
    }
    this.storyProgress += 2;
  }

}
