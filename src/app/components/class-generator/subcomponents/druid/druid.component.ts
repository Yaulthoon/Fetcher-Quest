import { Component, OnInit } from '@angular/core';

import { AttributesService } from '../../../../services/attributes.service';

@Component({
  selector: 'app-druid',
  templateUrl: './druid.component.html',
  styleUrls: ['../barbedbarian/barbedbarian.component.css']
})
export class DruidComponent implements OnInit {

  constructor(public _attributes: AttributesService) { }

  ngOnInit() {
  }

}
