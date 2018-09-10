import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-magic-square',
  templateUrl: './magic-square.component.html',
  styleUrls: ['./magic-square.component.css']
})
export class MagicSquareComponent implements OnInit {
	
square1: any = "1";
square2: any = "2";
square3: any = "3";
square4: any = "4";
square5: any = "5";
square6: any = "6";
square7: any = "7";
square8: any = "8";
square9: any = "9";
valNumbers: boolean = true;
errNumbers: String = "Maybe this only accepts numbers.";
conRange: boolean = true;
errRange: String = "Am I using the right numbers here?";
conUnique: boolean = true;
errUnique: String = "It seems that I can't repeat a number.";
cheFifteen: boolean = true;
errFifteen: String = "Gah, something isn't adding up.";
magicSuccess: boolean = false;
	
	validateNumbers() {
		var wrongTypes = [];
		var index = 0;
		var selector = document.getElementsByTagName('input');
		var squares = [
		this.square1, this.square2, this.square3,
		this.square4, this.square5, this.square6,
		this.square7, this.square8, this.square9
		];
		for(let value of squares) {
			if(isNaN(value) === true) {
				selector[index].style.backgroundColor = "#f2dede";
				selector[index].style.color = "#800000";
				wrongTypes.push(selector[index]);
			}
			if(wrongTypes.length > 0) {
				this.valNumbers = false;
			}
			index++;
		}
		setTimeout(() => {
			for(let wrong of wrongTypes) {
				wrong.style.backgroundColor = "#ffffff";
				wrong.style.color = "#000000";
				this.valNumbers = true;
			}}, 3000);
	}

	confirmRange() {
		var selector = document.getElementsByTagName('input');
		var squares = [
		this.square1, this.square2, this.square3,
		this.square4, this.square5, this.square6,
		this.square7, this.square8, this.square9
		];
		var wrongTypes = [];
		let index = 0;
		for (let square of squares) {
			if (1 <= square && square <= 9) {
			} else {
				selector[index].style.backgroundColor = "#f2dede";
				selector[index].style.color = "#800000";
				wrongTypes.push(selector[index]);
			}
			if (wrongTypes.length > 0) {
				this.conRange = false;
			}
			index++;
		}
		setTimeout(() => {
			for(let wrong of wrongTypes) {
				wrong.style.backgroundColor = "#ffffff";
				wrong.style.color = "#000000";
				this.conRange = true;
			}}, 3000);
	}
	
	confirmUnique() {
		var selector = Array.from(document.getElementsByTagName('input'));
		var squares = [
		this.square1, this.square2, this.square3,
		this.square4, this.square5, this.square6,
		this.square7, this.square8, this.square9
		];
		var wrongTypes = [];
		let index = 0;
		var set = {};
		for (let square of squares) {
			if(square in set) {
				for(let selectors of selector) {
					if (selectors.value === square) {
						selectors.style.backgroundColor="#f2dede";
						selectors.style.color = "#800000";
						wrongTypes.push(selectors);
					}
					if (wrongTypes.length > 0) {
						this.conUnique = false;
					}
				}
			}
			set[square] = selector[index];
			index++;
		}
		setTimeout(() => {
			for(let wrong of wrongTypes) {
				wrong.style.backgroundColor = "#ffffff";
				wrong.style.color = "#000000";
				this.conUnique = true;
			}}, 3000);
	}
	
	sumArray(total, num) {
		return total + num;
	}
	
	
	checkFifteen() {
		var topRow = [Number(this.square1), Number(this.square2), Number(this.square3)];
		var midRow = [Number(this.square4), Number(this.square5), Number(this.square6)];
		var botRow = [Number(this.square7), Number(this.square8), Number(this.square9)];
		var column1 = [Number(this.square1), Number(this.square4), Number(this.square7)];
		var column2 = [Number(this.square2), Number(this.square5), Number(this.square8)];
		var column3 = [Number(this.square3), Number(this.square6), Number(this.square9)];
		var diag1 = [Number(this.square1), Number(this.square5), Number(this.square9)];
		var diag2 = [Number(this.square3), Number(this.square5), Number(this.square7)];
		var magicCheck = [topRow, midRow, botRow, column1, column2,
		column3, diag1, diag2];
		
		let index = 0;
		for(let row of magicCheck) {
			if (row.reduce(this.sumArray) !== 15) {
				this.cheFifteen = false;
			}
			index++;
		}
		setTimeout(() => {
			this.cheFifteen = true;
		}, 3000);
		
	}
	
	checkSolution() {
		var selector = Array.from(document.getElementsByTagName('input'));
		this.validateNumbers();
		this.confirmRange();
		this.confirmUnique();
		this.checkFifteen();
		if (!this.valNumbers || !this.conRange || !this.conUnique || !this.cheFifteen) {
			console.log("You have no magic in your soul.");
			return;
		}
		for (let selected of selector) {
			selected.style.backgroundColor="#edf8ed";
			selected.style.color = "#003300";
			setTimeout(() => {
				selected.style.backgroundColor = "#ffffff";
				selected.style.color = "#000000";
				this.magicSuccess = true;
			}, 3000);
		}
	}
	
	sendPlaces(place) {
		this.router.navigate([place]);
	}

	constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  }

}
