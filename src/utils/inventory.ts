import { Injectable } from '@angular/core';

export class Inventory {
  private supplies: number = 25;
  private gold: number = 250;
  private bandages: number = 3;

  setSupplies(supplies: number) {
    this.supplies = supplies;
  }
  getSupplies() {
    return this.supplies;
  }
  setGold(gold: number) {
    this.gold = gold;
  }
  getGold() {
    return this.gold;
  }
  setBandages(bandages: number) {
    this.bandages = bandages;
  }
  getBandages() {
    return this.bandages;
  }

}
