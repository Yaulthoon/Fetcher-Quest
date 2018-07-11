import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideQuestsComponent } from './side-quests/side-quests.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { AboutComponent } from './about/about.component';
import { ActiveLinkService } from './active-link.service';
import { WhatIsFetcherQuestComponent } from './about/about.faq.folder/what-is-fetcher-quest/what-is-fetcher-quest.component';
import { MeetLupinFetcherComponent } from './about/about.faq.folder/meet-lupin-fetcher/meet-lupin-fetcher.component';
import { CoreGameplayComponent } from './about/about.faq.folder/core-gameplay/core-gameplay.component';
import { LatestUpdatesComponent } from './about/about.faq.folder/latest-updates/latest-updates.component';
import { MagicSquareComponent } from './side-quests/magic-square/magic-square.component';


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
    MagicSquareComponent
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
