import { Injectable } from '@angular/core';

import { Inventory } from './inventory';

export class CharacterClass {
  private name: String;
  private hp: number = 10;
  private active: boolean = false;
  public inventory = new Inventory();
  setClass(charName: String) {
    this.name = charName;
  }
  getClass() {
    return this.name;
  }
  setHp(hp: number) {
    if (hp > 10) {
      this.hp = 10;
    } else {
      this.hp = hp;
    }
  }
  getHp() {
    return this.hp;
  }
  setActive(isActive: boolean) {
    this.active = isActive;
  }
  getActive() {
    return this.active;
  }
}
