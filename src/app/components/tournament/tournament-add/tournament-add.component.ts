import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tournament-add',
  templateUrl: './tournament-add.component.html',
  styleUrls: ['./tournament-add.component.css']
})
export class TournamentAddComponent implements OnInit {

  // owner: Owner;
  // errorMessage: string;
  //
  // constructor(private ownerService: OwnerService, private router: Router) {
  //   this.owner = <Owner>{};
  // }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // onSubmit(owner: Owner) {
  //   owner.id = null;
  //   this.ownerService.addOwner(owner).subscribe(
  //     new_owner => {
  //       this.owner = new_owner;
  //       this.gotoOwnersList();
  //     },
  //     error => this.errorMessage = <any>error
  //   );
  // }

  backToMyTournaments() {
    this.router.navigate(['tournament/my']);
  }
}
