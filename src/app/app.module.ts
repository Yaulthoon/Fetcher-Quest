import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideQuestsComponent } from './components/side-quests/side-quests.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { AboutComponent } from './components/about/about.component';
import { ActiveLinkService } from './services/active-link.service';
import { WhatIsFetcherQuestComponent } from './components/about/about.faq.folder/what-is-fetcher-quest/what-is-fetcher-quest.component';
import { MeetLupinFetcherComponent } from './components/about/about.faq.folder/meet-lupin-fetcher/meet-lupin-fetcher.component';
import { CoreGameplayComponent } from './components/about/about.faq.folder/core-gameplay/core-gameplay.component';
import { LatestUpdatesComponent } from './components/about/about.faq.folder/latest-updates/latest-updates.component';
import { MagicSquareComponent } from './components/side-quests/subcomponents/magic-square/magic-square.component';
import { NthTwentyOneComponent } from './components/side-quests/subcomponents/nth-twenty-one/nth-twenty-one.component';


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
    NthTwentyOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [ActiveLinkService],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
