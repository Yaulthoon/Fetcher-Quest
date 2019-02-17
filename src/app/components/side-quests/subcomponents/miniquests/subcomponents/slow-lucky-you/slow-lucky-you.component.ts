import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../../../../../services/attributes.service';

@Component({
  selector: 'app-slow-lucky-you',
  templateUrl: './slow-lucky-you.component.html',
  styleUrls: ['../../../../../travel-screen/travel-screen.component.css', './slow-lucky-you.component.css']
})
export class SlowLuckyYouComponent implements OnInit {

  constructor(private _attributes: AttributesService, public router: Router) { }

  ngOnInit() {
    this._attributes.currentClass.inventory.setTreasure(this._attributes.currentClass.inventory.getTreasure() + 100);
  }

}
