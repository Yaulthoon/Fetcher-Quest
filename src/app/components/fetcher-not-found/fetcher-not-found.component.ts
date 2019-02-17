import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetcher-not-found',
  templateUrl: './fetcher-not-found.component.html',
  styleUrls: ['../side-quests/side-quests.component.css', './fetcher-not-found.component.css']
})
export class FetcherNotFoundComponent implements OnInit {

  navHideShow: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleHideShow() {
    console.log(this.navHideShow);
    if (this.navHideShow === false) {
      this.navHideShow = true;
    } else {
      this.navHideShow = false;
    }
  }

  navigation() {
    if (window.outerWidth >= 750) {
      return "inline";
    } else if (window.outerWidth < 750 && this.navHideShow === false) {
      return "none";
    } else {
      return "block";
    }
  }

  toggleNav() {
    return {
      display: this.navigation()
    }
  }

}
