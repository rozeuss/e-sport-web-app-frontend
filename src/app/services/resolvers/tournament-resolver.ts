import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Tournament} from '../../models/tournament';
import {TournamentService} from '../tournament/tournament.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TournamentResolver implements Resolve<Tournament> {

  constructor(private tournamentService: TournamentService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Tournament> {
    return this.tournamentService.findById(route.params.id);
  }

}
