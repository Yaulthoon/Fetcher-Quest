import { Component, OnInit } from '@angular/core';

import { AttributesService } from '../../../../services/attributes.service';

@Component({
  selector: 'app-paladin',
  templateUrl: './paladin.component.html',
  styleUrls: ['../barbedbarian/barbedbarian.component.css']
})
export class PaladinComponent implements OnInit {

  constructor(public _attributes: AttributesService) { }

  ngOnInit() {
  }

}
