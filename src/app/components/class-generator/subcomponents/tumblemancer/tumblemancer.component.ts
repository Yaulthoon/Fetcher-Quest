import { Component, OnInit } from '@angular/core';

import { AttributesService } from '../../../../services/attributes.service';

@Component({
  selector: 'app-tumblemancer',
  templateUrl: './tumblemancer.component.html',
  styleUrls: ['../barbedbarian/barbedbarian.component.css']
})
export class TumblemancerComponent implements OnInit {

  constructor(public _attributes: AttributesService) { }

  ngOnInit() {
  }

}
