import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from '../components/about/about.component';
import {HomeComponent} from '../components/home/home.component';
import {TournamentAddComponent} from '../components/tournament/tournament-add/tournament-add.component';
import {MyTournamentsComponent} from '../components/tournament/my-tournaments/my-tournaments.component';
import {LoginComponent} from '../components/login/login.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
import {RegistrationComponent} from '../components/registration/registration.component';
import {TournamentsListComponent} from '../components/tournament/tournaments-list/tournaments-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'tournament/organize',
    component: TournamentAddComponent
  },
  {
    path: 'tournament/my',
    component: MyTournamentsComponent
  },
  {
    path: 'tournament/list',
    component: TournamentsListComponent
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
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
