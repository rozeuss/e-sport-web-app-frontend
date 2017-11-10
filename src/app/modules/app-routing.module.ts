import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {TournamentAddComponent} from '../components/tournament/tournament-add/tournament-add.component';
import {MyTournamentsComponent} from '../components/tournament/my-tournaments/my-tournaments.component';
import {LoginComponent} from '../components/login/login.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
import {RegistrationComponent} from '../components/registration/registration.component';
import {TournamentsListComponent} from '../components/tournament/tournaments-list/tournaments-list.component';
import {TournamentInfoComponent} from '../components/tournament/tournament-info/tournament-info.component';
import {TournamentService} from '../services/tournament/tournament.service';
import {TournamentResolver} from '../services/resolvers/tournament-resolver';
import {MatchService} from '../services/match/match.service';
import {TournamentMatchesResolver} from '../services/resolvers/tournament-matches-resolver';
import {MyTournamentGuard} from '../services/guards/my-tournament-guard';
import {TournamentListResolver} from '../services/resolvers/tournament-list-resolver';
import {TeamInfoComponent} from '../components/team/team-info/team-info.component';
import {TeamResolver} from '../services/resolvers/team-resolver';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tournament/organize',
    component: TournamentAddComponent
  },
  {
    path: 'tournament/my',
    component: MyTournamentsComponent,
    canActivate: [MyTournamentGuard]
  },
  {
    path: 'tournament/list',
    component: TournamentsListComponent,
    resolve: {
      tournamentList: TournamentListResolver
    }
  },
  {
    path: 'team/:id',
    component: TeamInfoComponent,
    resolve: {
      team: TeamResolver,
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'tournament/:id',
    component: TournamentInfoComponent,
    resolve: {
      tournament: TournamentResolver,
      tournamentMatches: TournamentMatchesResolver
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes
 //   , {enableTracing: true}
    // @TODO powyzej do debugowania
    )],
  exports: [RouterModule]
})

export class AppRoutingModule {

  constructor(private tournamentService: TournamentService, private matchService: MatchService) {
  }
}
