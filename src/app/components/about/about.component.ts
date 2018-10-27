import { Component, OnInit, QueryList, ContentChildren, ViewChildren, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable ,  BehaviorSubject } from "rxjs";
import { WhatIsFetcherQuestComponent } from '../about/about.faq.folder/what-is-fetcher-quest/what-is-fetcher-quest.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../side-quests/side-quests.component.css']
})
export class AboutComponent implements OnInit {

  navHideShow: boolean = false;

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
    console.log(window.outerWidth);
    return {
      display: this.navigation()
    }
  }

  constructor(public router: Router) { }

  ngOnInit() {
  }



}
