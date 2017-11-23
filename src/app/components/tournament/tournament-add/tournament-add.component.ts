import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Tournament} from '../../../models/tournament';
import {TournamentService} from '../../../services/tournament/tournament.service';
import {ConfigurationService} from '../../../services/configuration/configuration.service';
import {DatePipe} from '@angular/common';
import {MatchService} from '../../../services/match/match.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tournament-add',
  templateUrl: './tournament-add.component.html',
  styleUrls: ['./tournament-add.component.css']
})
export class TournamentAddComponent implements OnInit {


  tournament: Tournament;
  successfullySubmitted: Boolean = false;
  errorMessage: string;
  minDate: Date;
  maxDate: Date;
  participants: Number;
  hasPlayoff: Boolean = false;
  daterangepickerModel: Date[];
  currentUser: any;


  constructor(private router: Router, private tournamentService: TournamentService, private matchService: MatchService,
              public configurationService: ConfigurationService, public datePipe: DatePipe) {
    this.tournament = <Tournament>{};
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onSubmit(tournamentForm: FormGroup): void {
    const tournament = tournamentForm.value;
    tournament.id = null;
    tournament.startDate = this.datePipe.transform(this.daterangepickerModel[0], 'yyyy-MM-dd');
    tournament.endDate = this.datePipe.transform(this.daterangepickerModel[1], 'yyyy-MM-dd');
    tournament.organizerId = this.currentUser.id;
    this.tournamentService.create(tournament).subscribe(
      new_tournament => {
        this.tournament = new_tournament;
        this.successfullySubmitted = true;
        this.matchService.createMatches(new_tournament.id, this.participants, this.hasPlayoff).subscribe(() => {
          tournamentForm.reset();
          setTimeout(() => {
            this.successfullySubmitted = false;
          }, 5000);
        });
      },
      error => this.errorMessage = <any>error  // 'Nie udało się utworzyć turnieju'
    );
  }

  backToMyTournaments(): void {
    this.router.navigate(['tournament/my']);
  }

  checkPrize(): Boolean {
    return this.tournament.prize < 10000;
  }

}
