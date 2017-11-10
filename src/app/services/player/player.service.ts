import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {Player} from '../../models/player';

@Injectable()
export class PlayerService {

  private entity_url = environment.REST_API_URL + 'player';

  constructor(private http: Http) {
  }

  findAll(): Observable<any> {
    return this.http.get(this.entity_url + '/findAll')
      .map((response: Response) => response.json());
  }

  findAllByTeamId(teamId: Number): Observable<Player[]> {
    return this.http.get(this.entity_url + '/findAllByTeamId/' + teamId)
      .map((response: Response) => response.json());
  }
}
