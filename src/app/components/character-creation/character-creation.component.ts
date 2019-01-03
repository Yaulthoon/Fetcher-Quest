import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


import { AttributesService } from '../../services/attributes.service';


@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['../side-quests/side-quests.component.css'],

})
export class CharacterCreationComponent implements OnInit {

  pArray = [
    "You may as well get started.",
    "Oh dear, you hit the wrong button by mistake.  That's ok, click the other button to get started.",
    "I fail to understand why you would do this.",
    "This is your last warning.  Please hit the start button.  Surely you are not doing this on purpose.",
    "Ok, enough of this tomfoolery.  Just get on with it.",
    "Fine...fine.  You have reduced this riveting game into a button clicking simulator.  Congratulations.",
    "Welcome to Button Simulator: the Game.  Please enjoy your stay.",
    "While you're smashing buttons, be sure to smash that Start button, so you can know when the game goes live."
  ];
  pArray2 = [
    "Go ahead and push the test button 3 times for me.",
    "Hmm...not quite right.  Try another 3 presses.",
    "Darn.  These buttons are stubborn.  Three more presses should do it though.",
    "Finally, the button seems to be in working order.  We can continue onward."
  ];
  resist: any = '';
  resistToNum() { this.resist = Number(this.resist); }
  resist2: number = 0;
  getResist2() { return Math.floor(this.resist2 / 3); }
  oldResist: any = '';
  setOldResist() { this.oldResist = this.resist }
  getOldResist() { return this.oldResist }
  h1String: String = "A New Beginning";
  setH1String(string) { if (typeof string != "string") { return; } this.h1String = string; }
  storyProgress: number = 0;
  navHideShow: boolean = false;
  disableButton: boolean = false;
  auth = this._attributes.getClass();

  authGuard() {
    if (this.auth !== undefined) {
      this.router.navigate(["/classGenerator/" + this.auth + "/"]);
    }
  }

  constructor(
    public _attributes: AttributesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authGuard();
    console.log("Character creation ready to go");
  }

  ngOnDestroy() {
  }

  getResist() {
    console.log(this.resist);
    return this.resist;
  }


  getStoryProgress(progress, resist) {
    if (this.storyProgress === progress) {
      if (typeof resist !== 'undefined') {
        this.resist = resist;
      }
      return true;
    }
    return false;
  }

  turnPage(direction, amount) {
    if (direction === 'back') {
      this.storyProgress -= amount;
    } else if (direction === 'continue') {
      this.storyProgress += amount;
    }
  }

  rebel(array) {
    if (array === 'pArray') {
      console.log(this.resist);
      if (this.resist === (this.pArray.length - 1)) {
        this.resist = (this.pArray.length - 1);
      } else {
        this.resist += 1;
      }
    } else {
      if (this.resist2 === (this.pArray2.length - 1) * 3) {
        console.log("final resist is " + this.resist2);
        return;
      } else {
        this.resist2 += 1;
        console.log(this.resist2);
      }
    }
  }

  determineAttributeTest(attribute, trialString, resistValue) {
    if (typeof this.resist === "number") {
      console.log(this.resist + 'is the number');
      if (this.resist <= 2) {
        this._attributes[attribute].next(this._attributes[attribute].value + 1);
      } else if (this.resist > 3) {
        this._attributes[attribute].next(this._attributes[attribute].value - 1);
      }
    }
    if (typeof this.resist === "string") {
      if (this.resist === '') {
        this.resist = resistValue;
        if (resistValue === 'negative') {
          this._attributes[attribute].next(this._attributes[attribute].value - 1);
        } else if (resistValue === 'positive') {
          this._attributes[attribute].next(this._attributes[attribute].value + 1);
        }
      } else {
        let name = this.resist;
        if (name.toLowerCase() === trialString) {
          this._attributes[attribute].next(this._attributes[attribute].value + 1);
        } else {
          this._attributes[attribute].next(this._attributes[attribute].value - 1);
        }
      }
    }
  }

  setAttribute(direction, amount, attribute, resistValue, h1String, trialString) {
    this.turnPage(direction, amount);
    this.setH1String(h1String);
    this.determineAttributeTest(attribute, trialString, resistValue);
    if (this.resist === 'positive' || this.resist === 'negative') {
      this.resist = '';
    } else {
      this.resist = resistValue;
    }
    if (typeof this._attributes[attribute] !== 'undefined') {
      console.log(attribute + " is now " + this._attributes[attribute].value +
        " and resist is now " + this.resist);
    }
  }

  setAlignment(alignments) {
    if (this._attributes[alignments].value < 4) {
      var alignment = alignments.substring(0, alignments.indexOf('V')).toLowerCase();
      console.log(alignment + " is " + this._attributes[alignment].value);
      this._attributes[alignment].next(true);
      console.log(alignment + " is " + this._attributes[alignment].value);
    } else if ((this._attributes[alignments].value >= 4) && (this._attributes[alignments].value <= 6)) {
      var alignment = alignments.substring(0, 1);
      if (alignment === 'f') {
        console.log('fONeutral' + " is " + this._attributes.fONeutral.value);
        this._attributes.fONeutral.next(true);
        console.log('fONeutral' + " is " + this._attributes.fONeutral.value);
      } else {
        console.log('nFNeutral' + " is " + this._attributes.nFNeutral.value);
        this._attributes.nFNeutral.next(true);
        console.log('nFNeutral' + " is " + this._attributes.nFNeutral.value);
      }
    } else if (this._attributes[alignments].value > 6) {
      var alignment = alignments.substring(alignments.indexOf('V') + 1).toLowerCase();
      this._attributes[alignment].next(true);
      console.log(alignment + " is " + this._attributes[alignment].value);
    }
  }

  toClassGenerator() {
    this.resistToNum();
    this.setAttribute(null, null, 'nihilVFaith', null, null, null);
    this.setAlignment('nihilVFaith');
    this.setAlignment('freedomVOrder');
    this._attributes.setClass();
    this.router.navigate(['class-generator']);
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

  progress() {
    return ((this.storyProgress) / 10 * 100) + "%";
  }

  progressBar() {
    return {
      "width": this.progress()
    }
  }

  toggleNav() {
    return {
      display: this.navigation()
    }
  }

}
