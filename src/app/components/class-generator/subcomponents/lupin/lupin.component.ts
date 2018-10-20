import { Component, OnInit } from '@angular/core';

import { AttributesService } from '../../../../services/attributes.service';

@Component({
  selector: 'app-lupin',
  templateUrl: './lupin.component.html',
  styleUrls: ['../barbedbarian/barbedbarian.component.css']
})
export class LupinComponent implements OnInit {

  constructor(public _attributes: AttributesService) { }

  ngOnInit() {
  }

}
