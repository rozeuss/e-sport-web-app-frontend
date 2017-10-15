import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlayerService {

  constructor(private http: Http) { }

  findAll(): Observable<any> {
    return this.http.get('http://localhost:8080/player/findAll')
      .map((response: Response) => response.json());
  }
}
