import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MagicSquareComponent } from '../components/side-quests/subcomponents/magic-square/magic-square.component';
import { NthTwentyOneComponent } from '../components/side-quests/subcomponents/nth-twenty-one/nth-twenty-one.component';
import { KindOfSlushComponent } from '../components/side-quests/subcomponents/kind-of-slush/kind-of-slush.component';
import { TheRefinersFireComponent } from '../components/side-quests/subcomponents/the-refiners-fire/the-refiners-fire.component';
import { IlltimedTenureComponent } from '../components/side-quests/subcomponents/illtimed-tenure/illtimed-tenure.component';

import { RealBeggarComponent } from '../components/side-quests/subcomponents/miniquests/subcomponents/real-beggar/real-beggar.component';
import { ShopScreenComponent } from '../components/shop-screen/shop-screen.component';

@Injectable({
  providedIn: 'root'
})
export class ActiveQuestService {

  //To add new quest, import component in this service and add the component to the entryComponents array
  chapterNumber: number = 0;
  questNumber: number = 0;
  currentQuest;
  normalQuests: any = [ShopScreenComponent,
    MagicSquareComponent, NthTwentyOneComponent, KindOfSlushComponent,
    TheRefinersFireComponent, IlltimedTenureComponent, RealBeggarComponent
  ];

  constructor(private router: Router) { }

}
