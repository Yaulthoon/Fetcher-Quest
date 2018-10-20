import { Component, OnInit } from '@angular/core';

import { AttributesService } from '../../../../services/attributes.service';

@Component({
  selector: 'app-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['../barbedbarian/barbedbarian.component.css']
})
export class JudgeComponent implements OnInit {

  constructor(public _attributes: AttributesService) { }

  ngOnInit() {
  }

}
