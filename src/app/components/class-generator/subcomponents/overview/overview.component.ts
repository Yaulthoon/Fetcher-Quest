import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../../../services/attributes.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['../../../side-quests/side-quests.component.css']
})
export class OverviewComponent implements OnInit {

  freedomOrder: number = this._attributes.freedomVOrder.value;
  nihilFaith: number = this._attributes.nihilVFaith.value;
  currentClass = "/class-generator/" + this._attributes.getClass() + "/";

  constructor(public _attributes: AttributesService, public router: Router) { }

  ngOnInit() {
  }

}
