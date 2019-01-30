import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../../../../../services/attributes.service';

@Component({
  selector: 'app-river-crossing',
  templateUrl: './river-crossing.component.html',
  styleUrls: ['../../../../../travel-screen/travel-screen.component.css', './river-crossing.component.css']
})
export class RiverCrossingComponent implements OnInit {

  character = this._attributes.currentClass.getClass();
  storyProgress: number = 0;
  supplyLoss: number = 0;

  constructor(private _attributes: AttributesService, private router: Router) { }

  ngOnInit() {
  }

  wait(pace) {
    if (pace === 3) {
      this._attributes.progressDistance -= 10;
    } else if (pace === 2) {
      this._attributes.progressDistance -= 4;
    } else {
      this._attributes.progressDistance -= 1;
    }
    this.storyProgress += 1;
  }

  pay() {
    this._attributes.currentClass.inventory.setGold(this._attributes.currentClass.inventory.getGold() - 50);
    this.storyProgress += 2;
  }

  riverRaft(pace) {
    if (this.character !== 'Tumblemancer') {
      let failure = Math.floor(Math.random() * 100) + 1;
      if (failure > 50) {
        let losses = Math.floor(Math.random() * 4) + 2;
        this.supplyLoss = losses;
        this._attributes.currentClass.inventory.setSupplies(this._attributes.currentClass.inventory.getSupplies() - losses);
        if (this._attributes.currentClass.inventory.getSupplies() < 0) {
          this._attributes.currentClass.inventory.setSupplies(0);
        }
      }
      if (pace === 3) {
        this._attributes.progressDistance -= 5;
      } else if (pace === 2) {
        this._attributes.progressDistance -= 2;
      } else {
        this._attributes.progressDistance -= 1;
      }
    }
    console.log(this.supplyLoss);
    this.storyProgress += 3;
  }

}
