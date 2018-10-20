import { Component, OnInit } from '@angular/core';

import { AttributesService } from '../../../../services/attributes.service';

@Component({
  selector: 'app-rogue',
  templateUrl: './rogue.component.html',
  styleUrls: ['../barbedbarian/barbedbarian.component.css']
})
export class RogueComponent implements OnInit {

  constructor(public _attributes: AttributesService) { }

  ngOnInit() {
  }

}
