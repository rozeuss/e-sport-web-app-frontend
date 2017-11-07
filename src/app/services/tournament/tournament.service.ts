import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Tournament} from '../../models/tournament';

@Injectable()
export class TournamentService {

  private entity_url = environment.REST_API_URL + 'tournament';

  constructor(private http: Http) {
  }

  create(tournament: Tournament): Observable<Tournament> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.http.post(this.entity_url + '/create', JSON.stringify(tournament), {headers})
      .map((response: Response) => <Tournament> response.json());
  }

  listAll(): Observable<any> {
    return this.http.get(this.entity_url + '/listAll')
      .map((response: Response) => <Tournament> response.json());
  }

  findById(id: Number): Observable<Tournament> {
    return this.http.get(this.entity_url + '/findById/' + id)
      .map((response: Response) => <Tournament> response.json());
  }

  findAllByOrganizer(id: Number): Observable<Tournament[]> {
    return this.http.get(this.entity_url + '/findAllByOrganizer/' + id)
      .map((response: Response) => <Tournament[]> response.json());
  }

}
