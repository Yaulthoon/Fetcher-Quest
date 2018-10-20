import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
selector: 'app-side-quests',
templateUrl: './side-quests.component.html',
styleUrls: ['./side-quests.component.css']
})
export class SideQuestsComponent implements OnInit {
	
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
		if(window.outerWidth >= 750) {
			return "inline";
		} else if(window.outerWidth < 750 && this.navHideShow === false) {
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
	
	constructor(){}
	
	ngOnInit() {
	}

}
