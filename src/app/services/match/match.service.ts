import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Http, Response, URLSearchParams} from '@angular/http';
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

  // update(hero: Hero): Promise<Hero> {
  //   const url = `${this.heroesUrl}/${hero.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(hero), {headers: this.headers})
  //     .toPromise()
  //     .then(() => hero)
  //     .catch(this.handleError);
  // }
}
