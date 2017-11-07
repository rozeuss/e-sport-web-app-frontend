import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {TournamentService} from '../tournament/tournament.service';

@Injectable()
export class MyTournamentGuard implements CanActivate {

  constructor(private tournamentService: TournamentService) {
  }

  canActivate() {
    // Settings will be cached in UsersService
    return this.tournamentService.findAllByOrganizer(1)
      .map(value => true);
  }

  // @TODO GUARD USE CASES
  // checking if user is authorised to see the target component
  // redirecting to login page
  // saving changes before leaving current component
  // asking user if changes should be saved
}
