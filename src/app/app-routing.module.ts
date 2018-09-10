import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideQuestsComponent } from './components/side-quests/side-quests.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { AboutComponent } from './components/about/about.component';
import { WhatIsFetcherQuestComponent } from './components/about/about.faq.folder/what-is-fetcher-quest/what-is-fetcher-quest.component';
import { MeetLupinFetcherComponent } from './components/about/about.faq.folder/meet-lupin-fetcher/meet-lupin-fetcher.component';
import { CoreGameplayComponent } from './components/about/about.faq.folder/core-gameplay/core-gameplay.component';
import { LatestUpdatesComponent } from './components/about/about.faq.folder/latest-updates/latest-updates.component';
import { MagicSquareComponent } from './components/side-quests/subcomponents/magic-square/magic-square.component';
import { NthTwentyOneComponent } from './components/side-quests/subcomponents/nth-twenty-one/nth-twenty-one.component';


const routes: Routes = [

{
	path: '',
	component: HomeScreenComponent
},

{
	path: 'sideQuests',
	component: SideQuestsComponent,
	children: [
	
	{
		path: '',
		component: MagicSquareComponent
	},
	
	{
		path: 'twenty-one',
		component: NthTwentyOneComponent
	}
]},

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
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
