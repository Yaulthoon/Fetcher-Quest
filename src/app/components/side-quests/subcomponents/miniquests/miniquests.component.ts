import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActiveQuestService } from '../../../../services/active-quest.service';

@Component({
  selector: 'app-miniquests',
  templateUrl: './miniquests.component.html',
  styleUrls: ['../../../travel-screen/travel-screen.component.css']
})

export class MiniquestsComponent implements OnInit {

  @ViewChild('minigameContainer', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private _quests: ActiveQuestService, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadQuest();
  }

  loadQuest() {
    this.entry.clear();
    //  const factory = this.resolver.resolveComponentFactory(this._quests.normalQuests[0]);
    const factory = this.resolver.resolveComponentFactory(this._quests.normalQuests[this._quests.questNumber]);
    const componentRef = this.entry.createComponent(factory);
    this._quests.currentQuest = (<any>this.entry)._data.renderElement.nextSibling.localName;
  }

}
