import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [

  {
    path: '',
    component: HomeScreenComponent
  },

  {
    path: 'character-creation',
    component: CharacterCreationComponent
  },

  {
    path: 'class-generator',
    component: ClassGeneratorComponent,
    children: [
      {
        path: '',
        component: OverviewComponent
      },
      {
        path: 'Tumblemancer',
        component: TumblemancerComponent
      },
      {
        path: 'Rogue',
        component: RogueComponent
      },
      {
        path: 'Barbedbarian',
        component: BarbedbarianComponent
      },
      {
        path: 'Judge',
        component: JudgeComponent
      },
      {
        path: 'Lupin',
        component: LupinComponent
      },
      {
        path: 'Mercenary',
        component: MercenaryComponent
      },
      {
        path: 'Druid',
        component: DruidComponent
      },
      {
        path: 'Paladin',
        component: PaladinComponent
      },
      {
        path: 'Zealot',
        component: ZealotComponent
      }
    ]
  },

  {
    path: 'sidequests',
    component: SideQuestsComponent,
    children: [
      {
        path: '',
        component: MagicSquareComponent
      },

      {
        path: 'twenty-one',
        component: NthTwentyOneComponent
      },
      {
        path: 'kind-of-slush',
        component: KindOfSlushComponent
      },
      {
        path: 'the-refiners-fire',
        component: TheRefinersFireComponent
      },
      {
        path: 'illtimed-tenure',
        component: IlltimedTenureComponent
      },
      {
        path: 'miniquests',
        component: MiniquestsComponent
      }
    ]
  },

  {
    path: 'about',
    component: AboutComponent,
    children: [

      {
        path: '',
        component: WhatIsFetcherQuestComponent
      },

      {
        path: 'meet',
        component: MeetLupinFetcherComponent
      },

      {
        path: 'core',
        component: CoreGameplayComponent
      },

      {
        path: 'updates',
        component: LatestUpdatesComponent
      }
    ]
  },

  {
    path: 'travel-screen',
    component: TravelScreenComponent
  },

  {
    path: 'event-screen',
    component: EventScreenComponent,
    children: [
      {
        path: '',
        component: MiniquestsComponent
      }
    ]
  },

  {
    path: '**', component: HomeScreenComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
