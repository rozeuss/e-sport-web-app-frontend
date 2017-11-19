import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthenticationService {

  private entity_url = environment.REST_API_URL + 'account';

  constructor(private http: Http) {
  }

  login(username: string, password: string) {
    const params = new URLSearchParams();
    params.append('email', username);
    params.append('password', password);
    const requestOptions = new RequestOptions();
    requestOptions.params = params;
    return this.http.get(this.entity_url + '/login', requestOptions)
      .map((response: Response) => {
        if (response.text() !== '') {
          localStorage.setItem('currentUser', JSON.stringify(response.json()));
        }
        return (response.text() !== '') ? response.json() : false;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
