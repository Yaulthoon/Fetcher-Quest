import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { CharacterClass } from '../../utils/character-class';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  progressDistance: number = 0;
  completedStops: number = 0;

  freedomVOrder = new BehaviorSubject(5);
  nihilVFaith = new BehaviorSubject(5);

  freedom = new BehaviorSubject(false);
  fONeutral = new BehaviorSubject(false);
  order = new BehaviorSubject(false);
  nihil = new BehaviorSubject(false);
  nFNeutral = new BehaviorSubject(false);
  faith = new BehaviorSubject(false);

  tumblemancer = new CharacterClass();
  rogue = new CharacterClass();
  barbedbarian = new CharacterClass();
  mercenary = new CharacterClass();
  lupin = new CharacterClass();
  judge = new CharacterClass();
  zealot = new CharacterClass();
  druid = new CharacterClass();
  paladin = new CharacterClass();

  currentClass = this.tumblemancer;

  constructor(private router: Router) {
    this.tumblemancer.setClass('Tumblemancer');
    this.rogue.setClass('Rogue');
    this.barbedbarian.setClass('Barbedbarian');
    this.mercenary.setClass('Mercenary');
    this.lupin.setClass('Lupin');
    this.zealot.setClass('Zealot');
    this.druid.setClass('Druid');
    this.paladin.setClass('Paladin');
    this.judge.setClass('Judge');
  }

  reset() {
    this.currentClass.setActive(false);
    this.freedomVOrder.next(5);
    this.nihilVFaith.next(5);
    this.freedom.next(false);
    this.fONeutral.next(false);
    this.order.next(false);
    this.nihil.next(false);
    this.nFNeutral.next(false);
    this.faith.next(false);
    this.router.navigate(['charCreation']);
    console.log("Reset back to character creation");
  }

  alignmentFlag(type) {
    if (type === 'freedomVOrder') {
      if (this.freedom.value) {
        return 'Anarchy';
      } else if (this.order.value) {
        return 'Order';
      } else if (this.fONeutral.value) {
        return 'Neutral';
      }
    } else if (type === 'nihilVFaith') {
      if (this.nihil.value) {
        return 'Nihil';
      } else if (this.faith.value) {
        return 'Faith';
      } else {
        return 'Neutral';
      }
    }
  }

  setClass() {
    if (this.nihil.value) {
      if (this.freedom.value) {
        this.barbedbarian.setActive(true);
        this.currentClass = this.barbedbarian;
        console.log(this.currentClass);
      } else if (this.fONeutral.value) {
        this.rogue.setActive(true);
        this.currentClass = this.rogue;
        console.log(this.currentClass);
      } else {
        this.tumblemancer.setActive(true);
        this.currentClass = this.tumblemancer;
        console.log(this.currentClass);
      }
    } else if (this.nFNeutral.value) {
      if (this.freedom.value) {
        this.mercenary.setActive(true);
        this.currentClass = this.mercenary;
        console.log(this.currentClass);
      } else if (this.fONeutral.value) {
        this.lupin.setActive(true);
        this.currentClass = this.lupin;
        console.log(this.currentClass);
      } else {
        this.judge.setActive(true);
        this.currentClass = this.judge;
        console.log(this.currentClass);
      }
    } else if (this.faith.value) {
      if (this.freedom.value) {
        this.zealot.setActive(true);
        this.currentClass = this.zealot;
        console.log(this.currentClass);
      } else if (this.fONeutral.value) {
        this.druid.setActive(true);
        this.currentClass = this.druid;
        console.log(this.currentClass);
      } else {
        this.paladin.setActive(true);
        this.currentClass = this.paladin;
        console.log(this.currentClass);
      }
    }
  }

  getClass() {
    var classes = [
      this.rogue, this.barbedbarian, this.tumblemancer,
      this.lupin, this.judge, this.druid, this.paladin,
      this.zealot, this.mercenary];
    for (var char of classes) {
      if (char.getActive()) {
        console.log(char.getClass() + ' turned out true');
        return char.getClass();
      }
    }
  }


}
