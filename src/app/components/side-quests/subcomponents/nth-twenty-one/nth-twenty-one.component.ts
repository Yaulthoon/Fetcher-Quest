import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nth-twenty-one',
  templateUrl: './nth-twenty-one.component.html',
  styleUrls: ['./nth-twenty-one.component.css']
})
export class NthTwentyOneComponent implements OnInit {
	
	number = 0;
	playerMove = 1;
	harveyMove;
	buttonHideShow = true;
	playerHideShow = true;
	storyProgress = 0;
	
  constructor() { }

  ngOnInit() {
  }
  
  turnPage(direction, amount) {
	  if(direction === 'back') {
		  this.storyProgress -= amount;
	  } else if (direction === 'continue') {
		  this.storyProgress += amount;
	  }
  }
  
  playerFirstStartGame() {
	  this.nthTwentyOne();
	  this.turnPage('continue', 1);
  }
  
  playerResetGame(amount) {
	  this.turnPage('back', amount);
	  this.number = 0;
  }
  
  buttonToggleHideShow() {
	  return {
		  "display": this.buttonHideShow
	  }
  }
  
  nthIncreaseCounter (time) {
	  setTimeout(() => {this.number += 1;}, time);
  }
  
  nthCheckWin() {
	  if(this.number === 17) {
		  this.nthIncreaseCounter(500);
		  this.nthIncreaseCounter(1000);
		  this.nthIncreaseCounter(1500);
		  this.harveyMove = 3;
		  return;
	  } else if (this.number === 18) {
		  this.nthIncreaseCounter(500);
		  this.nthIncreaseCounter(1000);
		  this.harveyMove = 2;
		  return;
	  } else if (this.number === 19) {
		  this.nthIncreaseCounter(500);
		  return;
	  }
	  else if (this.number === 20) {
		  this.nthIncreaseCounter(500);
		  this.harveyMove = 1;
	  }
  }
  
  nthCheckPlayer() {
	  var i = 0;
	  if(this.playerMove > 3 || this.playerMove < 1) {
		  console.log('out of bounds');
		  return false;
	  } else if(this.playerMove + this.number > 21) {
		  console.log('out of bounds');
		  this.buttonHideShow = true;
		  return false;
	  } else {
		  for(i; i < this.playerMove; i++) {
			  this.nthIncreaseCounter(500 * (i + 1));
		  }
		  setTimeout(() => {console.log('End of player turn with number at ' + this.number)}, 500 * (this.playerMove + 1));
		  
	  }
  }
  
  nthTwentyOne() {
	  if(this.number === 17 || this.number === 18 || this.number === 19) {
	  this.nthCheckWin();
	  } else {
	  var j = 0;
	  var randomNumber = Math.floor((Math.random() * 3) + 1);
	  if(this.number === 0) {
		  this.harveyMove = randomNumber;
		  for(j; j < randomNumber; j++) {
			  this.nthIncreaseCounter(500 * (j + 1));
		  }
	  } else if(this.number % 4 !== 0 && this.number < 20) {
		  var remainder = (4 - (this.number % 4)) % 4;
		  this.harveyMove = remainder;
		  console.log('stay on track remainder is ' + remainder);
		  for(j; j < remainder; j++) {
			  this.nthIncreaseCounter(500 * j + 1);
		  }
	  } else {
		  this.harveyMove = randomNumber;
		  for(j; j < randomNumber; j++) {
			  this.nthIncreaseCounter(500 * (j+1));
		  }
	  }
	  }
	  setTimeout(() => {
		  console.log('End of computer turn with number at ' + this.number);
		  this.buttonHideShow = true;
		  this.playerHideShow = true;
		  if(this.number === 20) {
		  this.turnPage('continue', 2);
		  return;
	  }
		  }, 1000 * ((this.playerMove % 3) + 1));
  }
  
  nthPlay() {
	  var i = 0;
	  this.buttonHideShow = false;
	  if(this.nthCheckPlayer() === false) {
		  return;
	  }
	  setTimeout(() => {
		  if(this.number === 20) {
			  this.turnPage('continue', 1);
			  return;
		  }
		  this.nthTwentyOne(); 
		  this.playerHideShow = false;
		  console.log('time for computer');
		  }, 1000 * this.playerMove);
	  if(this.number === 21) {
		  console.log('computer loss');
		  return;
	  }
	  this.harveyMove = '';
  }
		  

}
