import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
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


  create(name: String, country: String, accountId: Number) {
    const params = new URLSearchParams();
    params.append('name', name.toString());
    params.append('country', country.toString());
    params.append('accountId', accountId.toString());
    return this.http.post(this.entity_url + '/create', params).map((response: Response) => response.json());
  }

  getTeamStatistics(teamId: Number): Observable<Team> {
    return this.http.get(this.entity_url + '/getTeamStatistics/' + teamId)
      .map((response: Response) => response.json());
  }
}
