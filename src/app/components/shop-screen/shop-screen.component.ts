import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { StringsService } from '../../services/strings.service';
import { AttributesService } from '../../services/attributes.service';

@Component({
  selector: 'app-shop-screen',
  templateUrl: './shop-screen.component.html',
  styleUrls: ['../travel-screen/travel-screen.component.css']
})
export class ShopScreenComponent implements OnInit {

  gossipNum: number = 0;
  bandages: number = 0;
  bandagesStack: number = 0;
  supplies: number = 0;
  suppliesStack: number = 0;
  checkout: boolean = false;
  shopkeepGossip = [
    'The shop is named after myself.  Grace.  Saving Grace\'s, get it?  Hahaha...',
    'To proceed to checkout, just click near the shopping cart at the bottom of my table.',
    'One injury may not be so bad, but they can really add up. Bandages can cure what ails ya.',
    'Beggars are too poor to afford clothing, so ones wearing a cloak may be a priest in disguise.',
    'Have you ever met some guy called Izzy Kai? Rumor is he\'s a hero from another world.',
    'Sometimes heroically refusing a reward upfront can lead to better rewards later.',
    'Depending on when you visit my shop, I may carry different things at different prices.',
    'How do I appear in different places at the same time?  Astral projection.'
  ];
  shoppingCart = [['Bandages', 'bandages', 25], ['Bandage Pack', 'bandagesStack', 60],
  ['Supplies', 'supplies', 15], ['Supply Pack', 'suppliesStack', 120]];

  constructor(public _strings: StringsService, private _attributes: AttributesService) { }

  ngOnInit() {
    this._strings.shopkeep = 'Hello welcome to Saving Grace\'s! Just click on anything you want to add to your cart.';
    if (this._attributes.currentClass.inventory.getTreasure() > 0) {
      setTimeout(() => {
        this._strings.shopkeep = 'Oh, looks like you have treasure to sell. Here\'s your ' +
          this._attributes.currentClass.inventory.getTreasure() + ' gold.';
        this._attributes.currentClass.sellTreasure();
      }, 2000);
    }
  }

  gossip() {
    if (this.gossipNum === this.shopkeepGossip.length) {
      this.gossipNum = 0;
    }
    this._strings.shopkeep = this.shopkeepGossip[this.gossipNum];
    this.gossipNum++;
  }

  total() {
    let runningTotal: number = 0;
    for (let items of this.shoppingCart) {
      runningTotal += (Number(items[2]) * Number(this[items[1]]));
    }
    return runningTotal;
  }

  addToCart(item, itemName) {
    this[item] = this[item] + 1;
    this._strings.shopkeep = "I'll add the " + itemName + " to your order for you. Is there anything else you'll need today?";
  }

  minusFromCart(item, itemName) {
    this[item] -= 1;
    this._strings.shopkeep = "Oh, ok. I'll take one of the " + itemName + " off your order for you then.";
  }

  removeFromCart(item, itemName) {
    this[item] = 0;
    this._strings.shopkeep = "You didn't want any of those? Very well...";
  }

  purchase() {
    let inventory = this._attributes.currentClass.inventory;
    if (this.total() === 0) {
      this._strings.shopkeep = 'Looks like your shopping cart is empty.';
      return;
    }
    if (this.total() > inventory.getGold()) {
      this._strings.shopkeep = "I\'m sorry, you\'re lacking some gold here. What would you like to take off?";
    } else {
      inventory.setGold(inventory.getGold() - this.total());
      inventory.setBandages(inventory.getBandages() + this.bandages + (this.bandagesStack * 3));
      inventory.setSupplies(inventory.getSupplies() + this.supplies + (this.suppliesStack * 10));
      this.bandages = 0; this.bandagesStack = 0; this.supplies = 0; this.suppliesStack = 0;
      this._strings.shopkeep = "Thank you for your patronage! Will there be anything else?";
    }
  }

  toCheckout() {
    this.checkout = true;
    this._strings.shopkeep = "Ready to checkout?  Great, please review your order before finishing your purchase.";
  }

  toShop() {
    this.checkout = false;
    this._strings.shopkeep = "Wanted to browse some more?  That\'s fine, take your time.";
  }

}
