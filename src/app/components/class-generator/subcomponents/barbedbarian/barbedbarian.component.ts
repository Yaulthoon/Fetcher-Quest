import { Component, OnInit } from '@angular/core';
import { AttributesService } from '../../../../services/attributes.service';

@Component({
  selector: 'app-barbedbarian',
  templateUrl: './barbedbarian.component.html',
  styleUrls: ['./barbedbarian.component.css']
})
export class BarbedbarianComponent implements OnInit {

  constructor(public _attributes: AttributesService) { }

  ngOnInit() {
  }

}
