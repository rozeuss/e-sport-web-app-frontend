import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Team} from '../../models/team';

@Injectable()
export class TeamService {

  private entity_url = environment.REST_API_URL + 'team';

  constructor(private http: Http) {
  }

  findAllSignedForTournament(tournamentId: Number): Observable<Team[]> {
    return this.http.get(this.entity_url + '/findAllSignedForTournament/' + tournamentId)
      .map((response: Response) => response.json());
  }

  findById(teamId: Number): Observable<Team> {
    return this.http.get(this.entity_url + '/findById/' + teamId)
      .map((response: Response) => response.json());
  }

  findByAccountId(accountId: Number): Observable<Team> {
    return this.http.get(this.entity_url + '/findByAccountId/' + accountId)
      .map((response: Response) => response.json());
  }

}
