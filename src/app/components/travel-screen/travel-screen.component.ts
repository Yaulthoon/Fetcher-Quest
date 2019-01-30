import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../services/attributes.service';
import { ActiveQuestService } from '../../services/active-quest.service'
import { CharacterClass } from '../../../utils/character-class';

@Component({
  selector: 'app-travel-screen',
  templateUrl: './travel-screen.component.html',
  styleUrls: ['./travel-screen.component.css']
})
export class TravelScreenComponent implements OnInit {

  navHideShow: boolean = false;
  map: boolean = true;
  positionX: number = 0;
  positionY: number = 0;
  character = this._attributes.currentClass;
  injuries = this.character.getInjury();
  questNumber = Math.floor(Math.random() * this._quests.normalQuests.length);
  chapters = ['Rasa Forest', 'God\'s Acre', 'Tumble Lake', 'Mount Grimgar'];
  subChapters = [
    'A clean slate, a perfect adventuring spot for self-discovery',
    'Do not avast in the realm of the ghasts brave adventurers',
    'To those that must take this stroll, beware the troll and his toll',
    'Where there\'s smoke, there\'s fire and sometimes lava...and death'
  ];
  tips = [
    'A slow pace provides the highest chance of foraging for extra supplies.',
    'Have plenty of supplies to spare?  A fast pace provides the best movement rate per supply.',
    'Normal pace can trigger any event type, so be prepared for anything.',
    'Slow pace will not trigger high danger events unique to the fast pace option and vice versa.',
    'The extent of damage taken from injury-related events scales according to your pace.',
    'Bandages can cure injuries.  Its best to keep a couple onhand; especially if you are taking a faster pace.'
  ];
  tipNumber = Math.floor(Math.random() * this.tips.length);

  constructor(public _attributes: AttributesService, public _quests: ActiveQuestService, public router: Router) { }

  ngOnInit() {
    if (this._attributes.progressDistance === this._attributes.currentPath) {
      setTimeout(() => {
        this._attributes.progressDistance = 0;
        this._quests.chapterNumber += 1;
      }, 100);
    }
  }

  ngOnDestroy() {
    if (this.injuries.turns === 0) {
      this.character.setInjury(0, 0);
    }
  }

  leftDistance() { return this._attributes.progressDistance + "%"; }

  coordinates(x, y) {
    return {
      "left": x,
      "top": y
    }
  }

  currentPosition() {
    if (this._quests.chapterNumber === 0) {
      if (window.outerWidth > 750) {
        return this.coordinates('10%', '57%');
      } else {
        return this.coordinates('10%', '52%');
      }
    } else if (this._quests.chapterNumber === 1) {
      if (window.outerWidth > 750) {
        return this.coordinates('34%', '50%');
      } else {
        return this.coordinates('34%', '48%');
      }
    } else if (this._quests.chapterNumber === 2) {
      if (window.outerWidth > 750) {
        return this.coordinates('50%', '45%');
      } else {
        return this.coordinates('50%', '43%');
      }
    } else {
      if (window.outerWidth > 750) {
        return this.coordinates('64%', '59%');
      } else {
        return this.coordinates('63%', '55%');
      }
    }
  }

  characterStatus() {
    if (this.character.getHp() >= 7) {
      return "Healthy";
    } else if (this.character.getHp() >= 4) {
      return "OK";
    } else if (this.character.getHp() >= 1) {
      return "Critical!";
    } else {
      return "Dead";
    }
  }

  increaseDistance(num, supplyCost) {
    if (this.character.getHp() <= 0) {
      return;
    }
    if (this._attributes.progressDistance + num > this._attributes.currentPath) {
      this._attributes.progressDistance = this._attributes.currentPath;
    } else {
      this._attributes.progressDistance += num;
    }
    this.checkInjury();
    this.setPace(num);
    this.calculateCost(num, supplyCost);
    this.nextEvent();
  }

  calculateCost(num, supplyCost) {
    if (this.character.inventory.getSupplies() < supplyCost) {
      this.character.setHp(this.character.getHp() - 3);
      this.character.inventory.setSupplies(0);
      if (this.character.getHp() <= 0) {
        this.character.setHp(0);
      }
      return;
    }
    if (num === 3) {
      this.character.inventory.setSupplies(this.character.inventory.getSupplies() - supplyCost);
    } else if (num === 8) {
      this.character.inventory.setSupplies(this.character.inventory.getSupplies() - supplyCost);
    } else {
      this.character.inventory.setSupplies(this.character.inventory.getSupplies() - supplyCost);
    }
  }

  nextEvent() {
    this._quests.questNumber = this.questNumber;
    setTimeout(() => {
      this.router.navigate(['event-screen']);
    }, 1200);
  }

  setPace(num) {
    if (num === 3) {
      this._attributes.progressSpeed = 1;
    } else if (num === 8) {
      this._attributes.progressSpeed = 2;
    } else {
      this._attributes.progressSpeed = 3;
    }
  }

  checkInjury() {
    if (this.injuries.turns > 0) {
      this.character.setHp(this.character.getHp() - this.injuries.damage);
      this.character.setInjury(this.injuries.damage, this.injuries.turns - 1);
    } else {
      this.character.setInjury(0, 0);
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

  toggleCondition(condition) {
    if (this[condition]) {
      this[condition] = false;
    } else {
      this[condition] = true;
    }
  }

}
