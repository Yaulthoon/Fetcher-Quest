import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { MysteryObject } from "../../../../../utils/mystery-object";
import { MysteryDialogue } from "../../../../../utils/mystery-dialogue";

@Component({
  selector: 'app-illtimed-tenure',
  templateUrl: './illtimed-tenure.component.html',
  styleUrls: ['../magic-square/magic-square.component.css']
})
export class IlltimedTenureComponent implements OnInit {

  currentProgress = 0;
  turns: number = 20;
  endString: string = '';
  cook = new MysteryObject("Cook", "assets/murder-mystery/cook.svg", 0);
  doctor = new MysteryObject("Doctor", "assets/murder-mystery/doctor.svg", 1);
  handyman = new MysteryObject("Handyman", "assets/murder-mystery/handyman.svg", 2);
  merchant = new MysteryObject("Merchant", "assets/murder-mystery/merchant.svg", 3);
  ranger = new MysteryObject("Ranger", "assets/murder-mystery/ranger.svg", 4);
  candlestick = new MysteryObject("Candlestick", "assets/murder-mystery/candlestick.svg", 5);
  dagger = new MysteryObject("Dagger", "assets/murder-mystery/dagger.svg", 6);
  kitchenKnife = new MysteryObject("Knife", "assets/murder-mystery/kitchenKnife.svg", 7);
  pipe = new MysteryObject("Pipe", "assets/murder-mystery/pipe.svg", 8);
  syringe = new MysteryObject("Syringe", "assets/murder-mystery/syringe.svg", 9);
  wrench = new MysteryObject("Wrench", "assets/murder-mystery/wrench.svg", 10);
  dialogue = new MysteryDialogue();
  placeholder = "assets/murder-mystery/cook.svg";
  currentSubject: MysteryObject = this.cook;
  currentQuestion: MysteryObject = this.cook;

  constructor(private router: Router) { }

  ngOnInit() {
    ///////////////Setting qualities of MysteryObject entities///////////////
    this.cook.setAge('22');
    this.cook.setSpecialty('Gossiping');
    this.cook.setLikes('Hiking, Organic foods, Playing matchmaker');
    this.cook.setDislikes('Uncomfortable silences, Washing dishes, Microfiber dishcloths');
    this.cook.setRelationship('Casual Acquaintance');
    this.doctor.setAge('30');
    this.doctor.setSpecialty('Biology/Physiology');
    this.doctor.setLikes('Foraging for herbs, Reading, Hot foods');
    this.doctor.setDislikes('Superstitions, Harmful alchemy, Long hair on short people');
    this.doctor.setRelationship('Long-term caretaker');
    this.handyman.setAge('43');
    this.handyman.setSpecialty('Close friend/Bar brawling');
    this.handyman.setLikes('Spaghetti Westerns, Nature, Working with his hands');
    this.handyman.setDislikes('Politics, Taking medicine, Flying insects');
    this.handyman.setRelationship('Close friend, coworker');
    this.merchant.setAge('84');
    this.merchant.setSpecialty('Antiquities/Appraisals');
    this.merchant.setLikes('Gold, Silver, Artifacts with long histories');
    this.merchant.setDislikes('Window shoppers, Traveling, Elves with grudges');
    this.merchant.setRelationship('Traveling companion');
    this.ranger.setAge('256');
    this.ranger.setSpecialty('Weapons/Combat');
    this.ranger.setLikes('Archery, The sky at dusk, Four-leaf clovers');
    this.ranger.setDislikes('Cold weather, Fuzzy slippers, Dice with more than six sides');
    this.ranger.setRelationship('Security detail; hired collectively by group');
    this.candlestick.setAge('???');
    this.candlestick.setSpecialty('Lighting my fire');
    this.candlestick.setLikes('Fire, Waxing, Dimly-lit dinners');
    this.candlestick.setDislikes('Daylight, Lamp oil, Advances in technology');
    this.candlestick.setRelationship('Recently purchased by victim');
    this.dagger.setAge('16');
    this.dagger.setSpecialty('Summoning eidolons');
    this.dagger.setLikes('Short hair, Rackets, Thieves');
    this.dagger.setDislikes('Garnets, Airships, Giant eyes in the sky');
    this.dagger.setRelationship('None');
    this.kitchenKnife.setAge('???');
    this.kitchenKnife.setSpecialty('Slicing and/or dicing');
    this.kitchenKnife.setLikes('Whetstones, Cutting boards, Vegetables');
    this.kitchenKnife.setDislikes('Rust, Cold water, Being used as a screwdriver');
    this.kitchenKnife.setRelationship('Indirectly involved in feeding victim');
    this.pipe.setAge('???');
    this.pipe.setSpecialty('Carrier of burdens');
    this.pipe.setLikes('Billiards, Bulldogs, Poker');
    this.pipe.setDislikes('Tubes, Elbows, Heavy objects');
    this.pipe.setRelationship('Pipe of many purposes');
    this.syringe.setAge('???');
    this.syringe.setSpecialty('Harbinger of health or ruin');
    this.syringe.setLikes('Poking, Prodding, General discomfort');
    this.syringe.setDislikes('Sharing, Air bubbles, Unrecommended doses');
    this.syringe.setRelationship('Used regularly by victim for medicinal purposes');
    this.wrench.setAge('Adjustable');
    this.wrench.setSpecialty('Throwing itself into plans');
    this.wrench.setLikes('Tightening, loosening, Doubling as a hammer');
    this.wrench.setDislikes('Tight areas, Stripped screws, Enthusiastic tighteners');
    this.wrench.setRelationship('A friend of a friend');
  }

  turnPage(direction, num) {
    if (direction === 'continue') {
      this.currentProgress += num;
    } else {
      this.currentProgress -= num;
    }
  }

  setTurns(turns, num) {
    this.turns = turns;
    console.log('total turns: ' + this.turns);
    this.turnPage('continue', num);
  }

  onTouchStart(ev) {
    var mysteryBox = ev.currentTarget.childNodes;
    var tooltip = mysteryBox[0];
    tooltip.style.visibility = "visible";
  }

  onTouchEnd(ev) {
    var mysteryBox = ev.currentTarget.childNodes;
    var tooltip = mysteryBox[0];
    tooltip.style.visibility = "hidden";
  }

  dragstartHandler(ev) {
    console.log(ev);
    if (ev.target.id !== 'to' && ev.target.id !== 'about') {
      ev.dataTransfer.setData("text", ev.target.src);
      ev.effectAllowed = "copyMove";
    } else {
      console.log('attempted to stop');
      return;
    }
  }

  dragoverHandler(ev) {
    ev.preventDefault();
  }

  dropHandler(ev) {
    var id = ev.dataTransfer.getData("text");
    var imageName = id.substring((id.indexOf('murder-mystery/') + 15), id.indexOf('.svg'));
    ev.preventDefault();
    ev.target.src = id;
    if (this.turns !== 0) {
      if (ev.target.id === 'to') {
        this.currentSubject = this[imageName];
        this.turns--;
      } else {
        this.currentQuestion = this[imageName];
        this.turns--;
      }
    } else {
      this.turnPage('continue', 1);
      this.turns = 100;
    }
  }

  dragendHandler(ev) {
    var imageSrc = ev.currentTarget.src;
    var imageName = imageSrc.substring((imageSrc.indexOf('murder-mystery/') + 15), imageSrc.indexOf('.svg'));
    console.log(imageName + ' is the image name');
  }

  remove(ev) {
    ev.currentTarget.src = this.placeholder;
  }

  solve() {
    if (this.currentSubject.getName() === 'Doctor' && this.currentQuestion.getName() === 'Syringe') {
      this.turnPage('continue', 1);
    } else {
      this.turnPage('continue', 2);
    }
  }

  endDialogue(button) {
    let dialogue = button.innerHTML.toLowerCase().trim();
    if (dialogue === 'say nothing') {
      this.endString = "You walk without saying a word to anyone.  They all stare " +
        "at you as you walk past, but this was never your problem in the first place.";
    } else if (dialogue === 'blame her') {
      this.endString = "As you pass the Doctor, you tell her that she became " +
        "too emotionally invested in her patient.  As a doctor, she should have " +
        "realized that she could no longer act in a rational manner in the end. " +
        "Perhaps the blacksmith could not be cured, but his life was ultimately " +
        "cut short due to her short-sighted desires. The Cook shoots you a murderous " +
        "gaze as you leave. The Doctor does not say a word and continues to cry " +
        "into the shoulder of the Cook. Growing weary from this exhausting situation, " +
        "you decide it is time to continue on your way.";
    } else if (dialogue === 'offer sympathy') {
      this.endString = "None of this was anyone's fault.  Although you did not " +
        "know him personally, you do not feel like the Blacksmith would want the " +
        "Doctor to blame herself for his death.  She wanted to save him.  This much " +
        "is clear.  You tell the Doctor this as you place a hand on her shoulder. " +
        "She gazes up at you and whispers her thanks to you. The others chime in " +
        "with similar words of encouragement and the Doctor begins to calm herself. " +
        "Feeling that there is nothing more to be done, you say your goodbyes and " +
        "depart to continue your journey";
    }
  }

  toEventScreen(turns, num) {
    let eventScreen = this.router.url.substring(0, 13);
    if (eventScreen === "/event-screen") {
      this.router.navigate(['travel-screen']);
    } else {
      this.setTurns(turns, num);
    }
  }

}
