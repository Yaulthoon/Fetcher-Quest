import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../../../../../services/attributes.service';

@Component({
  selector: 'app-campsite-solo',
  templateUrl: './campsite-solo.component.html',
  styleUrls: ['./campsite-solo.component.css', '../../../../../travel-screen/travel-screen.component.css']
})
export class CampsiteSoloComponent implements OnInit {

  storyProgress: number = 0;

  constructor(private _attributes: AttributesService, private router: Router) { }

  ngOnInit() {
    this._attributes.currentClass.setHp(7);
  }

  camp(num, hp) {
    this._attributes.currentClass.camp(hp);
    this.storyProgress += num;
  }

}
