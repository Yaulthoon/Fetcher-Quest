import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Component({
selector: 'app-home-screen',
templateUrl: './home-screen.component.html',
styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit { 

	configURL = "assets/ajaxImage.txt";
	 svgs$: Observable<any>;
	
	getURL() {
	this.http.get(this.configURL, {responseType: 'text'}).subscribe((response: any) => {
		var d = response;
		document.getElementById("svgContainer").innerHTML = d;
		});
	}
	
	sendPlaces(place) {
		this.router.navigate([place]);
	}	

	slideTitle() {
		var titles = Array.from(document.getElementsByClassName('title'));
		var options = Array.from(document.getElementsByClassName('options'));
		setTimeout ( () => {
			(<any>titles[0]).style.opacity = 1;
			(<any>titles[0]).style.transform = "translate(0%, 12vh)";
			console.log("move attempted");
		}, 500);
	}
	
	showOptions() {
		var options = Array.from(document.getElementsByClassName('options'));
		setTimeout( () => {
			(<any>options[0]).style.opacity = 1;
			console.log("fade in");
		}, 2500);
	}
	
	ngOnInit() {
		this.slideTitle();
		this.showOptions();
		this.getURL();
	}

	constructor(private http: HttpClient, public route: ActivatedRoute, 
	public router: Router) {}

}