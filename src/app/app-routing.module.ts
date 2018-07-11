import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideQuestsComponent } from './side-quests/side-quests.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AboutComponent } from './about/about.component';
import { WhatIsFetcherQuestComponent } from './about/about.faq.folder/what-is-fetcher-quest/what-is-fetcher-quest.component';
import { MeetLupinFetcherComponent } from './about/about.faq.folder/meet-lupin-fetcher/meet-lupin-fetcher.component';
import { CoreGameplayComponent } from './about/about.faq.folder/core-gameplay/core-gameplay.component';
import { LatestUpdatesComponent } from './about/about.faq.folder/latest-updates/latest-updates.component';
import { MagicSquareComponent } from './side-quests/magic-square/magic-square.component';


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
