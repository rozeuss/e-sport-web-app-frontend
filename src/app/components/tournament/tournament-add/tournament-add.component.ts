import {Component} from '@angular/core';
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
export class TournamentAddComponent {

  tournament: Tournament;
  successfullySubmitted: Boolean = false;
  errorMessage: string;
  minDate: Date;
  maxDate: Date;
  participants: Number;
  hasPlayoff: Boolean = false;
  daterangepickerModel: Date[];


  constructor(private router: Router, private tournamentService: TournamentService, private matchService: MatchService,
              public configurationService: ConfigurationService, public datePipe: DatePipe) {
    this.tournament = <Tournament>{};
    this.minDate = new Date();
    console.log(this.configurationService.bsDatepickerConfig);
    console.log(router.url);
  }

  onSubmit(tournamentForm: FormGroup): void {
    console.log(tournamentForm);
    const tournament = tournamentForm.value;
    console.log(this.participants);
    console.log(this.hasPlayoff);
    tournament.id = null;
    tournament.startDate = this.datePipe.transform(this.daterangepickerModel[0], 'yyyy-MM-dd');
    tournament.endDate = this.datePipe.transform(this.daterangepickerModel[1], 'yyyy-MM-dd');
    this.tournamentService.create(tournament).subscribe(
      new_tournament => {
        console.log(new_tournament);
        this.tournament = new_tournament;
        this.successfullySubmitted = true;
        this.matchService.createMatches(new_tournament.id, this.participants, this.hasPlayoff).subscribe(data => {
          tournamentForm.reset();
          console.log(data);
          setTimeout(() => {
            // @TODO zrób modala elo
            this.successfullySubmitted = false;
          }, 5000);
        });
        // that.goToCreatedTournament();
      },
      error => this.errorMessage = <any>error  // 'Nie udało się utworzyć turnieju'
    );
  }

  backToMyTournaments(): void {
    this.router.navigate(['tournament/my']);
  }

  xd() {
    console.log('cos');
  }

  checkPrize(): Boolean {
    return this.tournament.prize < 10000;
  }

  log(a) {
    console.log(a);
    console.log(this.hasPlayoff);
  }
}
