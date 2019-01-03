import { Injectable } from '@angular/core';

export class MysteryObject {
  private name: string;
  private num: number;
  private age: string;
  private specialty: string;
  private likes: string;
  private dislikes: string;
  private relationship: string;
  private portrait: string;

  constructor(name, portrait, num) {
    this.name = name;
    this.portrait = portrait;
    this.num = num;
  }

  public getName() {
    return this.name;
  }
  public getNum() {
    return this.num;
  }
  public setAge(age) {
    this.age = age;
  }
  public getAge() {
    return this.age;
  }
  public getPortrait() {
    return this.portrait;
  }
  public setSpecialty(specialty) {
    this.specialty = specialty;
  }
  public getSpecialty() {
    return this.specialty;
  }
  public setLikes(likes) {
    this.likes = likes;
  }
  public getLikes() {
    return this.likes;
  }
  public setDislikes(dislikes) {
    this.dislikes = dislikes;
  }
  public getDislikes() {
    return this.dislikes;
  }
  public setRelationship(relationship) {
    this.relationship = relationship;
  }
  public getRelationship() {
    return this.relationship;
  }
}
