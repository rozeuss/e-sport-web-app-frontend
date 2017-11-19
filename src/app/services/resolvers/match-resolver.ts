import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Match} from '../../models/match';
import {MatchService} from '../match/match.service';

@Injectable()
export class MatchResolver implements Resolve<Match> {

  constructor(private matchService: MatchService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Match> {
    return this.matchService.findById(route.params.id);
  }

}
