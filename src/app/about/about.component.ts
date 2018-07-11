import { Component, OnInit, QueryList, ContentChildren, ViewChildren, ElementRef, Renderer2 } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ActiveLinkService } from '../active-link.service';
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs";
import { WhatIsFetcherQuestComponent } from '../about/about.faq.folder/what-is-fetcher-quest/what-is-fetcher-quest.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	
	@ViewChildren('item', {read: ElementRef}) private items: any;
	
  constructor(private _active: ActiveLinkService, public router: Router, private renderer: Renderer2) { }

  ngOnInit() {
  }
  
  navOptions = ["Title screen", "About", "Minigames"];
  aboutOptions = ["What is Fetcher Quest?", "Meet Lupin Fetcher", "Core Gameplay", "Latest Updates"];
  counter: boolean = true;
  num = new BehaviorSubject(0);
    
	currentLink;
	resulting;
	defaultColor = "#ffffff";
	activeColor = "#1f1c14";
	
	linkStyle(color) {
		return {"color": color,
		"border": "0px solid white"
		};
	}
	
	activeLink(newLink, color) {
		var i = 0;
		var linkArray = this.items.map(x => x.nativeElement);
		linkArray[this._active.currentLink].className = "nav";
		linkArray[newLink].className = "navActive";
		this._active.currentLink = newLink;
	}
	
	
	
	check() {
		this.resulting = this.items.map(x => x.nativeElement);
		console.log(this.resulting);
	}
	
	sendPlaces(place) {
		this.router.navigate(place);
	}
	
	stopInc() {
		this.counter = false;
		console.log("cleared just fine");
	}
	
	increaseInc() {
		this.counter = true;
			
		setTimeout(() => {
			this.num.next(this.num.value + 1);
			console.log(this.num.value);
		}, 25);
	}
	
	
}

/*currentLink: Number = 0;
	activeLink() {
		var links = Array.from(document.getElementsByClassName("nav"));
	}*/