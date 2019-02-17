import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../../../../../services/attributes.service';

@Component({
  selector: 'app-wagon-woes',
  templateUrl: './wagon-woes.component.html',
  styleUrls: ['../../../../../travel-screen/travel-screen.component.css', './wagon-woes.component.css']
})
export class WagonWoesComponent implements OnInit {

  characterClass = this._attributes.currentClass.getClass();
  storyProgress: number = 0;

  constructor(private _attributes: AttributesService, private router: Router) { }

  ngOnInit() {
  }

  patchWheel() {
    this._attributes.currentClass.inventory.setSupplies(this._attributes.currentClass.inventory.getSupplies() - 5);
    this.storyProgress = 1;
  }

  buyWheel() {
    this._attributes.currentClass.inventory.setGold(this._attributes.currentClass.inventory.getGold() - 100);
    this._attributes.progressDistance -= 5;
    this.storyProgress += 1;
  }

  charity() {
    this._attributes.progressDistance -= 15;
    this.storyProgress += 2;
  }

}
