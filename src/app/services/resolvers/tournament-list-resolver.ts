import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MatchService} from '../match/match.service';
import {Match} from '../../models/match';
import {TournamentService} from '../tournament/tournament.service';

@Injectable()
export class TournamentListResolver implements Resolve<Match[]> {

  constructor(private tournamentService: TournamentService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Match[]> {
    return this.tournamentService.listAll();
  }
}
