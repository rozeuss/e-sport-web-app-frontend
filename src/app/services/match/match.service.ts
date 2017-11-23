import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Match} from '../../models/match';

@Injectable()
export class MatchService {

  private entity_url = environment.REST_API_URL + 'match';

  constructor(private http: Http) {
  }

  createMatches(tournamentId: Number, participants: Number, hasPlayoff: Boolean): Observable<Match[]> {
    const params = new URLSearchParams();
    params.append('tournamentId', tournamentId.toString());
    params.append('participants', participants.toString());
    params.append('hasPlayoff', hasPlayoff.toString());
    return this.http.post(this.entity_url + '/createMatches', params).map((response: Response) => response.json());
  }

  findAllByTournamentId(tournamentId: Number): Observable<Match[]> {
    return this.http.get(this.entity_url + '/findAllByTournamentId/' + tournamentId)
      .map((response: Response) => response.json());
  }

  findById(matchId: Number): Observable<Match> {
    return this.http.get(this.entity_url + '/findById/' + matchId)
      .map((response: Response) => response.text() ? response.json() : {});
    // res.text() ? res.json() : {}; ;
  }

  updateDate(matchId: Number, date: String) {
    const params = new URLSearchParams();
    params.append('date', date.toString());
    const requestOptions = new RequestOptions();
    requestOptions.params = params;
    return this.http.put(this.entity_url + '/updateDate/' + matchId, {},
      requestOptions).map((response: Response) => response.json());
  }

  updateScore(matchId: Number, scoreHome: Number, scoreAway: Number) {
    const params = new URLSearchParams();
    params.append('scoreHome', scoreHome.toString());
    params.append('scoreAway', scoreAway.toString());
    const requestOptions = new RequestOptions();
    requestOptions.params = params;
    return this.http.put(this.entity_url + '/updateScore/' + matchId, {},
      requestOptions).map((response: Response) => response.json());
  }
}
