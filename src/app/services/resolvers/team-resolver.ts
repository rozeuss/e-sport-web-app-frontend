import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Team} from '../../models/team';
import {TeamService} from '../team/team.service';

@Injectable()
export class TeamResolver implements Resolve<Team> {

  constructor(private teamService: TeamService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Team> {
    return this.teamService.findById(route.params.id);
  }

}
