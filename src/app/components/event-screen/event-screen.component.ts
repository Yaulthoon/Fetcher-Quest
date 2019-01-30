import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../services/attributes.service';
import { ActiveQuestService } from '../../services/active-quest.service';
import { StringsService } from '../../services/strings.service';
import { CharacterClass } from '../../../utils/character-class';
import { ShopScreenComponent } from '../../components/shop-screen/shop-screen.component';

@Component({
  providers: [ShopScreenComponent],
  selector: 'app-event-screen',
  templateUrl: './event-screen.component.html',
  styleUrls: ['../travel-screen/travel-screen.component.css']
})
export class EventScreenComponent implements OnInit {

  navHideShow: boolean = false;
  character = this._attributes.currentClass;
  injuries = this._attributes.currentClass.getInjury();
  currentQuest;

  constructor(public _attributes: AttributesService, public _quests: ActiveQuestService,
    public _strings: StringsService, public router: Router, private _shop: ShopScreenComponent) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => { this.currentQuest = this._quests.currentQuest; }, 300);
    console.log(this._quests.currentQuest);
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

  shopGossip() {
    this._shop.gossip();
  }

  leaveShop() {
    this._strings.shopkeep = 'Thank you for visiting Saving Grace\'s, please come again!';
    setTimeout(() => { this.router.navigate(['travel-screen']); }, 1700);
  }

}
