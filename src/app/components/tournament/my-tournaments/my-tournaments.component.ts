import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-tournaments',
  templateUrl: './my-tournaments.component.html',
  styleUrls: ['./my-tournaments.component.css']
})
export class MyTournamentsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // this.ownerService.getOwners().subscribe(
    //   owners => this.owners = owners,
    //   error => this.errorMessage = <any> error);
  }

  addTournament() {
    this.router.navigate(['/tournament/organize']);
  }
}
