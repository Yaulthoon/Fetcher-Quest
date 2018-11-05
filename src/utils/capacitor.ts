import { Injectable } from '@angular/core';

export class Capacitor {
  private current: number;
  private maximum: number;

  constructor(currentNumber: number, maximumNumber: number) {
    this.current = currentNumber;
    this.maximum = maximumNumber;
  }
  public capacity() {
    return this.maximum - this.current;
  }
  public getCurrent() {
    return this.current;
  }
  public setCurrent(change: number) {
    this.current = change;
  }
  public getMaximum() {
    return this.maximum;
  }
}
