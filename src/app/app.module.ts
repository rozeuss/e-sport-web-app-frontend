import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PlayerListComponent} from './components/player/player-list/player-list.component';
import {PlayerService} from './services/player/player.service';
import {NavComponent} from './components/nav/nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './modules/app-routing.module';
import {TournamentAddComponent} from './components/tournament/tournament-add/tournament-add.component';
import {MyTournamentsComponent} from './components/tournament/my-tournaments/my-tournaments.component';
import {LoginComponent} from './components/login/login.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {TournamentsListComponent} from './components/tournament/tournaments-list/tournaments-list.component';
import {TournamentService} from './services/tournament/tournament.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { pl } from 'ngx-bootstrap/locale';
import {ConfigurationService} from './services/configuration/configuration.service';
import {DatePipe} from '@angular/common';
import {MatchService} from './services/match/match.service';
import { TournamentInfoComponent } from './components/tournament/tournament-info/tournament-info.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TeamService} from './services/team/team.service';
import {BsModalRef, TooltipModule} from 'ngx-bootstrap';
import {TournamentResolver} from './services/resolvers/tournament-resolver';
import {TournamentMatchesResolver} from './services/resolvers/tournament-matches-resolver';
import {MyTournamentGuard} from './services/guards/my-tournament-guard';
import {TournamentListResolver} from './services/resolvers/tournament-list-resolver';
import { MatchInfoComponent } from './components/match/match-info/match-info.component';
import { TeamInfoComponent } from './components/team/team-info/team-info.component';
import {GroupByPipe} from './pipes/group-by-pipe';
import {TeamResolver} from './services/resolvers/team-resolver';
import {MapValuesPipe} from './pipes/map-values-pipe';
import {MatchResolver} from './services/resolvers/match-resolver';
import {SortPipe} from './pipes/sort-pipe';
import {ChartModule} from 'primeng/primeng';
import {AuthGuard} from './services/guards/auth.guard';
import {AlertComponent} from './components/alert/alert.component';
import {AccountService} from './services/account/account.service';
import {AuthenticationService} from './services/authentication/authentication.service';
import {AlertService} from './services/alert/alert.service';

defineLocale('pl', pl);

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    TournamentAddComponent,
    MyTournamentsComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    TournamentsListComponent,
    TournamentInfoComponent,
    MatchInfoComponent,
    TeamInfoComponent,
    AlertComponent,
    GroupByPipe,
    MapValuesPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    AppRoutingModule,
    ChartModule

],
  providers: [
    AccountService,
    AuthenticationService,
    AlertService,
    PlayerService,
    TournamentService,
    TournamentResolver,
    TournamentListResolver,
    ConfigurationService,
    DatePipe,
    GroupByPipe,
    MapValuesPipe,
    SortPipe,
    MatchService,
    MatchResolver,
    TournamentMatchesResolver,
    TeamService,
    TeamResolver,
    BsModalRef,
    MyTournamentGuard,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 // @TODO podobno *Pipe powinny byc w declarations a nie providers
}
