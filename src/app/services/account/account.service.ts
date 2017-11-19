import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Account} from '../../models/account';
import {environment} from '../../../environments/environment';


@Injectable()
export class AccountService {

  private entity_url = environment.REST_API_URL + 'account';

  constructor(private http: Http) {
  }


  login(id: number) {
    return this.http.get(this.entity_url + '/login', this.jwt()).map((response: Response) => response.json());
  }

  create(account: Account) {
    return this.http.post(this.entity_url + '/create', account, this.jwt()).map((response: Response) => response.json());
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }
  }
}
