import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MatchService} from '../match/match.service';
import {Match} from '../../models/match';

@Injectable()
export class TournamentMatchesResolver implements Resolve<Match[]> {

  constructor(private matchService: MatchService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Match[]> {
    return this.matchService.findAllByTournamentId(route.params.id);
  }

}
