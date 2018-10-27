import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ContentChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kind-of-slush',
  templateUrl: './kind-of-slush.component.html',
  styleUrls: ['../magic-square/magic-square.component.css']
})
export class KindOfSlushComponent implements OnInit {

  @ContentChildren(KindOfSlushComponent) iceBlocks: QueryList<KindOfSlushComponent>;

  inactiveBlock: String = "assets/ice-puzzle/inactiveBlock.svg";
  activeBlock: String = "assets/ice-puzzle/activeBlock.svg";
  currentBlock: String = "assets/ice-puzzle/currentBlock.svg";
  winCondition: String = "";
  loss: boolean = false;
  numOfMoves = 0;
  iceBlockArray = [
    'x', 'x', 'o', 'o', 'x',
    'o', 'x', 'o', 'x', 'o',
    'x', 'o', 'o', 'x', 'o',
    'o', 'x', 'x', 'o', 'x',
    'x', 'o', 'o', 'x', 'x'
  ];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.beginGame();
    console.log('let the game begin');
  }

  beginGame() {
    const images = document.querySelectorAll('img');
    images[21].style.cursor = "pointer";
    images[22].style.cursor = "pointer";
  }

  resetGame() {
    var i = 0;
    const images = document.querySelectorAll('img');
    this.loss = false;
    this.numOfMoves = 0;
    this.winCondition = "";
    images[21].style.cursor = "pointer";
    images[22].style.cursor = "pointer";
    for (i; i < this.iceBlockArray.length; i++) {
      if (this.iceBlockArray[i] === 'x') {
        images[i].src = "assets/ice-puzzle/inactiveBlock.svg";
      } else {
        images[i].src = "assets/ice-puzzle/activeBlock.svg";
      }
    }
  }

  determineImg(value, init) {
    if (value === '') {
      return init;
    } else {
      const pathway = value.substring(value.indexOf('assets'));
      if (pathway === "assets/ice-puzzle/activeBlock.svg") {
        return this.activeBlock;
      } else if (pathway === "assets/ice-puzzle/inactiveBlock.svg") {
        return this.inactiveBlock;
      } else {
        return this.currentBlock;
      }
    }
  }

  determineNeighbors(num) {
    const images = document.querySelectorAll('img');
    const neighbors = [];
    if (images[num - 2] !== undefined) {
      if ((num - 1) % 5 !== 0) {
        neighbors.push(images[num - 2]);
      }
    }
    if (images[num] !== undefined) {
      if (num % 5 !== 0) {
        neighbors.push(images[num]);
      }
    }
    if (images[num - 6] !== undefined) {
      neighbors.push(images[num - 6]);
    }
    if (images[num + 4] !== undefined) {
      neighbors.push(images[num + 4]);
    }
    return neighbors;
  }

  adjustNeighbors(neighbors) {
    for (var neighbor of neighbors) {
      const img = neighbor.src.substring(neighbor.src.indexOf('assets'));
      if (img === this.activeBlock || img === this.currentBlock) {
        neighbor.src = this.inactiveBlock;
        neighbor.style.cursor = 'auto';
      } else {
        neighbor.src = this.activeBlock;
        neighbor.style.cursor = 'pointer';
      }
    }
  }

  firstMove(value, num, neighbors) {
    if (num === 22 || num === 23) {
      value.src = "assets/ice-puzzle/currentBlock.svg";
      this.adjustNeighbors(neighbors);
      this.numOfMoves += 1;
      console.log('first turn has been made');
    } else {
      return;
    }
  }

  valid(neighbors) {
    var validMove = false;
    for (var neighbor of neighbors) {
      const img = neighbor.src.substring(neighbor.src.indexOf('assets'));
      if (img === "assets/ice-puzzle/currentBlock.svg") {
        validMove = true;
        return true;
      }
    }
    if (!validMove) {
      return false;
    }
  }

  checkWin() {
    const winCon = document.querySelectorAll('img');
    if (winCon[2].src.substring(winCon[2].src.indexOf('assets')) === this.currentBlock) {
      this.winCondition = "Well done! For reference, it took you " +
        this.numOfMoves + " moves to get across.";
      if (this.numOfMoves > 14) {
        this.winCondition += " Think you can get it down to 14 moves?";
      }
      return true;
    }
  }

  checkLoss(neighbors) {
    var loss = true;
    for (var neighbor of neighbors) {
      if (!loss) {
        console.log(loss);
        return loss;
      } else {
        const img = neighbor.src.substring(neighbor.src.indexOf('assets'));
        if (img !== "assets/ice-puzzle/inactiveBlock.svg") {
          loss = false;
        }
      }
    }
    if (loss) {
      this.winCondition = "Oh dear, looks like you're sunk";
      this.loss = true;
    }
    return loss;
  }

  move(value, num) {
    if (!this.checkWin()) {
      const pathway = value.src.substring(value.src.indexOf('assets'));
      const neighbors = this.determineNeighbors(num);
      const validMove = this.valid(neighbors);
      if (this.loss === true) {
        this.winCondition = "Oh dear, looks like you're sunk";
        return;
      }
      if (this.numOfMoves === 0) {
        this.firstMove(value, num, neighbors);
        return;
      } else {
        console.log('this made it past the first move barrier');
        if (validMove) {
          if (pathway === "assets/ice-puzzle/activeBlock.svg") {
            console.log('turn into inactive');
            value.src = "assets/ice-puzzle/currentBlock.svg";
            value.style.cursor = "auto";
            this.adjustNeighbors(neighbors);
            console.log(neighbors);
          } else if (pathway === "assets/ice-puzzle/inactiveBlock.svg") {
            console.log('illegal move, try again');
          }
        }
      }
      this.numOfMoves = this.numOfMoves + 1;
      this.checkLoss(neighbors);
      this.checkWin();
    }
  }
}
