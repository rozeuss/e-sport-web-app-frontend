import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TournamentService} from '../../../services/tournament/tournament.service';
import {Tournament} from '../../../models/tournament';

@Component({
  selector: 'app-my-tournaments',
  templateUrl: './my-tournaments.component.html',
  styleUrls: ['./my-tournaments.component.css']
})
export class MyTournamentsComponent implements OnInit {
  tournaments: Array<Tournament>;
  isDataLoaded: Boolean = false;

  constructor(private router: Router, private tournamentService: TournamentService) {
  }

  ngOnInit() {
    const ID_ACCOUNT_POBIERANY_Z_TOKENA = 1;
    this.tournamentService.findAllByOrganizer(ID_ACCOUNT_POBIERANY_Z_TOKENA).subscribe(tournaments => {
      this.tournaments = tournaments.reverse();
      this.isDataLoaded = true;
    }, error => {
      console.log(error);
    });
  }

  addTournament() {
    this.router.navigate(['/tournament/organize']);
  }
}
