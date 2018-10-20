import { Component, OnInit } from '@angular/core';

import { AttributesService } from '../../../../services/attributes.service';

@Component({
  selector: 'app-mercenary',
  templateUrl: './mercenary.component.html',
  styleUrls: ['../barbedbarian/barbedbarian.component.css']
})
export class MercenaryComponent implements OnInit {

  constructor(public _attributes: AttributesService) { }

  ngOnInit() {
  }

}
