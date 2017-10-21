import { Component, OnInit } from '@angular/core';
import {Account} from '../../../models/account';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.css']
})
export class TournamentsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const account = new Account();
    const email = account.email;
  }

}
