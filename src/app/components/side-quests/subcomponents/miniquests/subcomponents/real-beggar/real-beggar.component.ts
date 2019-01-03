import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../../../../../services/attributes.service';

@Component({
  selector: 'app-real-beggar',
  templateUrl: './real-beggar.component.html',
  styleUrls: ['../../../../../travel-screen/travel-screen.component.css']
})
export class RealBeggarComponent implements OnInit {

  storyProgress: number = 0;

  constructor(private _attributes: AttributesService, private router: Router) { }

  ngOnInit() {
  }

  turnPage(num, direction) {
    if (direction === 'continue') {
      this.storyProgress += num;
    } else {
      this.storyProgress -= num;
    }
  }

  toTravelScreen() {
    this.router.navigate(['travel-screen']);
  }

  giveItem(item, num, direction) {
    if (item === 'gold') {
      this._attributes.currentClass.inventory.setGold(this._attributes.currentClass.inventory.getGold() - 25);
      this._attributes.currentClass.setHp(this._attributes.currentClass.getHp() + 5);
      this.turnPage(num, direction);
    } else if (item === 'supplies') {
      this._attributes.currentClass.inventory.setSupplies(this._attributes.currentClass.inventory.getSupplies() - 3);
      this._attributes.currentClass.inventory.setBandages(this._attributes.currentClass.inventory.getBandages() + 3);
      this.turnPage(num, direction);
    }
  }

}
