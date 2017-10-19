import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PlayerListComponent} from './components/player-list/player-list.component';
import {PlayerService} from './services/player/player.service';
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from './modules/app-routing.module';
import { TournamentAddComponent } from './components/tournament/tournament-add/tournament-add.component';
import { MyTournamentsComponent } from './components/tournament/my-tournaments/my-tournaments.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TournamentsListComponent } from './components/tournament/tournaments-list/tournaments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    TournamentAddComponent,
    MyTournamentsComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    TournamentsListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
