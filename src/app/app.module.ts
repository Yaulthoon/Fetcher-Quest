import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { AttributesService } from './services/attributes.service';
import { ActiveQuestService } from './services/active-quest.service';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';

import { AboutComponent } from './components/about/about.component';
import { WhatIsFetcherQuestComponent } from './components/about/about.faq.folder/what-is-fetcher-quest/what-is-fetcher-quest.component';
import { MeetLupinFetcherComponent } from './components/about/about.faq.folder/meet-lupin-fetcher/meet-lupin-fetcher.component';
import { CoreGameplayComponent } from './components/about/about.faq.folder/core-gameplay/core-gameplay.component';
import { LatestUpdatesComponent } from './components/about/about.faq.folder/latest-updates/latest-updates.component';

import { SideQuestsComponent } from './components/side-quests/side-quests.component';
import { MagicSquareComponent } from './components/side-quests/subcomponents/magic-square/magic-square.component';
import { NthTwentyOneComponent } from './components/side-quests/subcomponents/nth-twenty-one/nth-twenty-one.component';
import { KindOfSlushComponent } from './components/side-quests/subcomponents/kind-of-slush/kind-of-slush.component';
import { TheRefinersFireComponent } from './components/side-quests/subcomponents/the-refiners-fire/the-refiners-fire.component';
import { IlltimedTenureComponent } from './components/side-quests/subcomponents/illtimed-tenure/illtimed-tenure.component';

import { MiniquestsComponent } from './components/side-quests/subcomponents/miniquests/miniquests.component';
import { RealBeggarComponent } from './components/side-quests/subcomponents/miniquests/subcomponents/real-beggar/real-beggar.component';

import { CharacterCreationComponent } from './components/character-creation/character-creation.component';

import { ClassGeneratorComponent } from './components/class-generator/class-generator.component';
import { TumblemancerComponent } from './components/class-generator/subcomponents/tumblemancer/tumblemancer.component';
import { OverviewComponent } from './components/class-generator/subcomponents/overview/overview.component';
import { PaladinComponent } from './components/class-generator/subcomponents/paladin/paladin.component';
import { MercenaryComponent } from './components/class-generator/subcomponents/mercenary/mercenary.component';
import { DruidComponent } from './components/class-generator/subcomponents/druid/druid.component';
import { LupinComponent } from './components/class-generator/subcomponents/lupin/lupin.component';
import { RogueComponent } from './components/class-generator/subcomponents/rogue/rogue.component';
import { BarbedbarianComponent } from './components/class-generator/subcomponents/barbedbarian/barbedbarian.component';
import { JudgeComponent } from './components/class-generator/subcomponents/judge/judge.component';
import { ZealotComponent } from './components/class-generator/subcomponents/zealot/zealot.component';

import { TravelScreenComponent } from './components/travel-screen/travel-screen.component';

import { EventScreenComponent } from './components/event-screen/event-screen.component';

import { ShopScreenComponent } from './components/shop-screen/shop-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SideQuestsComponent,
    HomeScreenComponent,
    AboutComponent,
    WhatIsFetcherQuestComponent,
    MeetLupinFetcherComponent,
    CoreGameplayComponent,
    LatestUpdatesComponent,
    MagicSquareComponent,
    NthTwentyOneComponent,
    CharacterCreationComponent,
    ClassGeneratorComponent,
    TumblemancerComponent,
    OverviewComponent,
    PaladinComponent,
    MercenaryComponent,
    DruidComponent,
    LupinComponent,
    RogueComponent,
    BarbedbarianComponent,
    JudgeComponent,
    ZealotComponent,
    KindOfSlushComponent,
    TheRefinersFireComponent,
    IlltimedTenureComponent,
    TravelScreenComponent,
    EventScreenComponent,
    MiniquestsComponent,
    RealBeggarComponent,
    ShopScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AttributesService, ActiveQuestService],
  bootstrap: [AppComponent],
  entryComponents: [RealBeggarComponent, ShopScreenComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
