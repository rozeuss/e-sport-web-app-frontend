import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TournamentService} from '../../../services/tournament/tournament.service';
import {Tournament} from '../../../models/tournament';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.css']
})
export class TournamentsListComponent implements OnInit {
  tournaments: Array<Tournament>;

  constructor(private router: Router, private tournamentService: TournamentService) {
  }

  ngOnInit() {
    this.tournamentService.listAll().subscribe(
      data => {
        console.log(data);
        this.tournaments = data;
      },
      error => console.error(error)
    );
  }
}
