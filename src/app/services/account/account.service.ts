import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {Account} from '../../models/account';
import {environment} from '../../../environments/environment';


@Injectable()
export class AccountService {

  private entity_url = environment.REST_API_URL + 'account';

  constructor(private http: Http) {
  }

  findByEmail(email: String) {
    const params = new URLSearchParams();
    params.append('email', email.toString());
    const requestOptions = new RequestOptions();
    requestOptions.params = params;
    return this.http.get(this.entity_url + '/getByEmail', requestOptions)
      .map((response: Response) => response.text() ? response.json() : {});
  }

  create(email: String, password: String) {
    const params = new URLSearchParams();
    params.append('email', email.toString());
    params.append('password', password.toString());
    return this.http.post(this.entity_url + '/create', params).map((response: Response) => response.json());
  }
}
