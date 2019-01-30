import { Injectable } from '@angular/core';

import { Inventory } from './inventory';

export class CharacterClass {
  private name: String;
  private hp: number = 10;
  private active: boolean = false;
  private injury = {
    damage: 0,
    turns: 0
  }
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
  setInjury(damage: number, turns: number) {
    this.injury.damage = damage;
    this.injury.turns = turns;
  }
  getInjury() {
    return this.injury;
  }

  useBandage() {
    if (this.injury.turns === 0) {
      return;
    }
    this.inventory.setBandages(this.inventory.getBandages() - 1);
    this.setInjury(0, 0);
  }

  camp(hp: number) {
    this.inventory.setSupplies(this.inventory.getSupplies() - 1);
    this.setHp(this.getHp() + hp);
  }

  sellTreasure() {
    this.inventory.setGold(this.inventory.getGold() + this.inventory.getTreasure());
    this.inventory.setTreasure(0);
  }

}
