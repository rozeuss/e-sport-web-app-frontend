import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public currentUser: Account;

  ngOnInit(): void {
    // console.log("elo");
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
