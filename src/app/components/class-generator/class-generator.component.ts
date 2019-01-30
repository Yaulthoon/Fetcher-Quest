import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../services/attributes.service';

import { TumblemancerComponent } from '../../components/class-generator/subcomponents/tumblemancer/tumblemancer.component';
import { OverviewComponent } from '../../components/class-generator/subcomponents/overview/overview.component';
import { PaladinComponent } from '../../components/class-generator/subcomponents/paladin/paladin.component';
import { MercenaryComponent } from '../../components/class-generator/subcomponents/mercenary/mercenary.component';
import { DruidComponent } from '../../components/class-generator/subcomponents/druid/druid.component';
import { LupinComponent } from '../../components/class-generator/subcomponents/lupin/lupin.component';
import { RogueComponent } from '../../components/class-generator/subcomponents/rogue/rogue.component';
import { BarbedbarianComponent } from '../../components/class-generator/subcomponents/barbedbarian/barbedbarian.component';
import { JudgeComponent } from '../../components/class-generator/subcomponents/judge/judge.component';
import { ZealotComponent } from '../../components/class-generator/subcomponents/zealot/zealot.component';

@Component({
  selector: 'app-class-generator',
  templateUrl: './class-generator.component.html',
  styleUrls: ['../side-quests/side-quests.component.css']
})
export class ClassGeneratorComponent implements OnInit {

  //Mercenary:  cannot be poisoned by food, can gather more supplies
  //Barbarian: Fast pace costs 2 less supplies.  Slow pace costs 2 more supplies
  //Paladin: Recognizes pure of heart
  //Zealot: Chance of dodging natural disasters, disregard for danger
  //Rogue: Rogue's cant
  //Judge: Can sense rigged games can win in case of ties
  //Tumblemancer: Recognizes evil/cursed/poisonous objects
  //Lupin: troupe ability
  //Druid: Recognizes all plant life

  constructor(private router: Router, public _attributes: AttributesService) { }

  currentClass = this._attributes.getClass();
  navHideShow: boolean = false;
  authNum: number = 0;
  freedomOrder: number = this._attributes.freedomVOrder.value;
  nihilFaith: number = this._attributes.nihilVFaith.value;
  alignmentTypes = [
    this._attributes.freedom.value, this._attributes.fONeutral.value,
    this._attributes.order.value, this._attributes.nihil.value,
    this._attributes.nFNeutral.value, this._attributes.faith.value
  ];

  authGuard() {
    console.log('Checking character creation...');
    for (let alignmentTypes of this.alignmentTypes) {
      console.log(alignmentTypes);
      if (this.authNum > 0) {
        break;
      }
      if (alignmentTypes) {
        this.authNum++;
        console.log('Character creation was completed.  Proceed to classGenerator');
      }
    }
    if (this.authNum === 0) {
      this.router.navigate(['character-creation']);
      console.log('Character creation was NOT completed');
    }
  }

  ngOnInit() {
    this.authGuard();
    this._attributes.getClass();
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
