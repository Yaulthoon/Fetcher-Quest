import { Component, OnInit } from '@angular/core';

import { AttributesService } from '../../../../services/attributes.service';

@Component({
  selector: 'app-zealot',
  templateUrl: './zealot.component.html',
  styleUrls: ['../barbedbarian/barbedbarian.component.css']
})
export class ZealotComponent implements OnInit {

  constructor(public _attributes: AttributesService) { }

  ngOnInit() {
  }

}
