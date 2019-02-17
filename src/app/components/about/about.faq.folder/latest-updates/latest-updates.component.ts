import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latest-updates',
  templateUrl: './latest-updates.component.html',
  styleUrls: ['./latest-updates.component.css']
})
export class LatestUpdatesComponent implements OnInit {

  //Child variable str will be whatever the parent sets [trial] to be 
  @Input('trial') str;

  constructor() { }

  ngOnInit() {
  }

}
