import { Component, OnInit } from '@angular/core';

import { Capacitor } from '../../../../../utils/capacitor';

@Component({
  selector: 'app-the-refiners-fire',
  templateUrl: './the-refiners-fire.component.html',
  styleUrls: ['../magic-square/magic-square.component.css']
})
export class TheRefinersFireComponent implements OnInit {

  storyProgress = 0;
  moveCount = 0;
  capacitor1 = new Capacitor(5, 6);
  capacitor2 = new Capacitor(2, 4);
  capacitor3 = new Capacitor(6, 8);
  capacitor4 = new Capacitor(3, 7);
  winTable = [this.capacitor1, this.capacitor2, this.capacitor3, this.capacitor4];
  winner: boolean = false;
  announcer = "Objective: To each their own they dare to say, " +
    "but fire soon shall make them pay; unless equal share of sin they weigh. " +
    "There must be a trick behind these containers.";

  constructor() {
  }

  ngOnInit() {
    console.log(this.capacitor2.capacity());
  }

  capacitorHeight(capacitor) {
    if (window.outerWidth > 750) {
      return {
        "height": (capacitor.getMaximum() * 15) + "px"
      }
    } else {
      return {
        "height": (capacitor.getMaximum() * 8) + "px"
      }
    }
  }

  fillCapacitor(capacitor) {
    return {
      "top": (capacitor.capacity() / capacitor.getMaximum() * 100) + "%",
      "height": (capacitor.getCurrent() / capacitor.getMaximum() * 100) + "%"
    }
  }

  progressStory(num, direction) {
    if (direction === 'continue') {
      this.storyProgress = this.storyProgress + num;
    } else if (direction === 'back') {
      this.storyProgress = this.storyProgress - num;
    }
  }

  checkWin() {
    var even = 0;
    for (var capacitor of this.winTable) {
      if (capacitor.getCurrent() === 4) {
        even += 1;
      }
    }
    if (even === 4) {
      this.winner = true;
      return true;
    }
  }

  pour(to, from) {
    if (this.winner) {
      console.log('player wins');
      return true;
    }
    console.log('pour attempted');
    if (to.capacity() === 0) {
      console.log('container was full');
      return false;
    }
    if (to.capacity() >= from.getCurrent()) {
      to.setCurrent(from.getCurrent() + to.getCurrent());
      from.setCurrent(0);
      this.moveCount += 1;
    } else if (to.capacity() < from.getCurrent()) {
      from.setCurrent(from.getCurrent() - to.capacity());
      to.setCurrent(to.getMaximum());
      console.log(from.getCurrent());
      this.moveCount += 1;
    }
  }

  solve() {
    if (this.checkWin()) {
      this.announcer = "You hear a click and the tablet opens up.  That seemed " +
        "easy enough. You collect the rewards of your effort and decide to pocket " +
        "the tablet as well.  Someone may be willing to buy an ancient-looking " +
        "artifact like this. It only took you " + this.moveCount + " moves to solve " +
        "the puzzle of the tablet.";
    } else {
      console.log('puzzle failed');
      this.progressStory(1, 'continue');
    }
  }

}
