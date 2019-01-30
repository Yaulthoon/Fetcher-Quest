import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { AttributesService } from '../../../../../../services/attributes.service';

@Component({
  selector: 'app-high-low',
  templateUrl: './high-low.component.html',
  styleUrls: ['../../../../../travel-screen/travel-screen.component.css', './high-low.component.css']
})
export class HighLowComponent implements OnInit {

  storyProgress: number = 0;
  character = this._attributes.currentClass;
  bank: number = 300;
  bet: number = 0;
  winnings: number = 0;
  cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  cardColors = ['#f2fff7', '#f0ebff', '#ffecec', '#fbf9d9'];
  king: string = "assets/cards/fetcherKing.svg";
  queen: string = "assets/cards/fetcherQueen.svg";
  jack: string = "assets/cards/fetcherJack.svg";
  ace: string = "assets/cards/fetcherAce.svg";
  back: string = "assets/cards/fetcherCardBack.svg";
  opponentCard: number = 9;
  opponentColor: string = this.cardColors[0];
  opponentStatus: boolean = false;
  userCard: number = 12;
  userColor: string = this.cardColors[0];
  userStatus: boolean = false;
  winLoss: string = " win";

  constructor(private _attributes: AttributesService, private router: Router, private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  dealCard() {
    this.whichDeal();
  }

  whichDeal() {
    let pickCard = Math.floor(Math.random() * this.cardFaces.length);
    let pickColor = Math.floor(Math.random() * this.cardColors.length);
    if (this.userStatus && this.opponentStatus) {
      this.userStatus = false;
      this.opponentStatus = false;
    } else if (this.opponentStatus) {
      this.userCard = pickCard;
      this.userColor = this.cardColors[pickColor];
      while (this.userCard === this.opponentCard && this.userColor === this.opponentColor) {
        let newColor = Math.floor(Math.random() * this.cardColors.length);
        this.userColor = this.cardColors[newColor];
      }
      this.userStatus = true;
    } else {
      this.opponentCard = pickCard;
      this.opponentColor = this.cardColors[pickColor];
      this.opponentStatus = true;
      this.character.inventory.setGold(this.character.inventory.getGold() - this.bet);
    }
  }

  maxBet() {
    let max = 50 - this.bet;
    if (this.bank < 50) {
      this.bet = this.bank;
    } else if (this.character.inventory.getGold() < 50) {
      this.bet = this.character.inventory.getGold();
    } else {
      this.bet = this.bet + max;
    }
  }

  increaseBet() {
    if (this.bet === 50 || this.character.inventory.getGold() < this.bet + 10 || this.bank < (this.bet + 10)) {
      return;
    } else {
      this.bet += 10;
    }
  }

  decreaseBet() {
    if (this.bet === 0) {
      return;
    } else {
      this.bet -= 10;
    }
  }

  highLow(choice) {
    this.dealCard();
    console.log(choice.className);
    if (choice.className === 'high') {
      if (this.userCard > this.opponentCard) {
        this.character.inventory.setGold(this.character.inventory.getGold() + (this.bet * 2));
        this.bank -= this.bet;
        this.winLoss = " win";
        this.winnings += this.bet;
      } else if (this.userCard === this.opponentCard) {
        if (this.character.getClass() === 'Judge') {
          this.bank -= this.bet;
          this.winnings += this.bet;
          this.character.inventory.setGold(this.character.inventory.getGold() + (this.bet * 2));
          this.winLoss = ", through your Judgely powers, win";
        } else {
          this.bank += this.bet;
          this.winnings -= this.bet;
          this.winLoss = " lose";
        }
      } else {
        this.bank += this.bet;
        this.winnings -= this.bet;
        this.winLoss = " lose";
      }
    } else {
      if (this.userCard < this.opponentCard) {
        this.character.inventory.setGold(this.character.inventory.getGold() + (this.bet * 2));
        this.bank -= this.bet;
        this.winnings += this.bet;
        this.winLoss = " win";
      } else {
        if (this.character.getClass() === 'Judge' && this.userCard === this.opponentCard) {
          this.bank -= this.bet;
          this.winnings += this.bet;
          this.character.inventory.setGold(this.character.inventory.getGold() + (this.bet * 2));
          this.winLoss = ", through your Judgely powers, win";
        } else {
          this.winnings -= this.bet;
          this.bank += this.bet;
          this.winLoss = " lose";
        }
      }
    }
  }

  newRound() {
    this.bet = 0;
    this.dealCard();
  }

  cardLoader(num) {
    return this.cardFaces[num];
  }

  determineFace(num) {
    let card = this.cardFaces[num];
    if (card === "Q") {
      return this.queen;
    } else if (card === "J") {
      return this.jack;
    } else if (card === "A") {
      return this.ace;
    } else {
      return this.king;
    }
  }

  cardFront(num, type) {
    if (num < 9) {
      return {
        "border": "0px solid black",
        "background": this[type]
      }
    } else {
      if (window.outerWidth > 750) {
        return {
          "background-image": "url(" + this.determineFace(num) + ")",
          "background-size": "107%",
          "background-repeat": "no-repeat",
          "background-position": "center center",
          "background-color": this[type]
        }
      } else {
        return {
          "background-image": "url(" + this.determineFace(num) + ")",
          "background-size": "115%",
          "background-repeat": "no-repeat",
          "background-position": "center center",
          "background-color": this[type]
        }
      }
    }
  }

  cardBack() {
    if (window.outerWidth > 750) {
      return {
        "background": "url(" + this.back + ")",
        "background-size": "107%",
        "background-repeat": "no-repeat",
        "background-position": "center center",
        "position": "absolute",
        "top": "0%",
        "left": "90%",
        "z-index": "5",
        "cursor": "pointer"
      }
    } else {
      return {
        "background": "url(" + this.back + ")",
        "background-size": "115%",
        "background-repeat": "no-repeat",
        "background-position": "center center",
        "position": "absolute",
        "top": "0%",
        "left": "40%",
        "z-index": "5",
        "cursor": "pointer"
      }
    }
  }

  cardBackground(num, status, type) {
    if (!status) {
      if (type === 'opponent') {
        if (window.outerWidth > 750) {
          return {
            "transform": "translate(345%, 0)",
            "visibility": "hidden",
            "background-color": this.opponentColor,
            "z-index": "0"
          }
        } else {
          return {
            "transform": "translate(98%, -95%)",
            "visibility": "hidden",
            "background-color": this.opponentColor,
            "z-index": "3"
          }
        }
      } else {
        if (window.outerWidth > 750) {
          return {
            "transform": "translate(345%, -110%)",
            "visibility": "hidden",
            "background-color": this.userColor
          }
        } else {
          return {
            "transform": "translate(-19%, -95%)",
            "visibility": "hidden",
            "background-color": this.userColor
          }
        }
      }
    } else if (type === 'opponent') {
      return {
        "background-color": this.opponentColor,
        "visibility": "visible",
        "z-index": "10"
      }
    } else {
      return {
        "background-color": this.userColor,
        "visibility": "visible"
      }
    }
  }

}
