import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../../../models/match';
import {ActivatedRoute} from '@angular/router';
import {DatePipe, Location} from '@angular/common';
import {ConfigurationService} from '../../../services/configuration/configuration.service';
import {TournamentService} from '../../../services/tournament/tournament.service';
import {Tournament} from '../../../models/tournament';
import {MatchService} from '../../../services/match/match.service';
import {AlertService} from '../../../services/alert/alert.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  @Input() match: Match;
  datepickerModel: Date;
  tournament: Tournament;
  minDate: Date;
  maxDate: Date;
  isEditingScores: Boolean = false;
  helper: boolean;
  isNextMatchReady: Boolean = false;
  currentUser: any;
  isDateButtonDisabled = true;

  constructor(private route: ActivatedRoute, private location: Location, public configurationService: ConfigurationService,
              private tournamentService: TournamentService, private matchService: MatchService, public datePipe: DatePipe,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.match = this.route.snapshot.data['match'];
    this.datepickerModel = new Date(this.match.startDate);
    this.tournamentService.findById(this.match.tournamentId).subscribe(data => {
      this.tournament = data;
      this.minDate = new Date(this.tournament.startDate);
      this.maxDate = new Date(this.tournament.endDate);
      this.isDisabled();
    });
    this.matchService.findById(this.match.nextMatchId).subscribe(data => {
      if (data.teamAway !== null && data.teamHome !== null) {
        this.isNextMatchReady = true;
      }
      if (data && Object.keys(data).length === 0) {
        this.isNextMatchReady = false;
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  updateDate(newDate: Date): void {
    this.matchService.updateDate(this.match.id, this.datePipe.transform(newDate, 'yyyy-MM-dd'))
      .subscribe(data => {
        if (this.helper === true) {
          this.alertService.success('Poprawnie ustawiono datę ' + data.startDate + '.');
        }
      });
  }

  editScores(): void {
    if (this.isEditingScores === false) {
      this.match.scoreHome = 0;
      this.match.scoreAway = 0;
    }
    this.isEditingScores = true;
  }

  saveChanges(): void {
    if (this.match.scoreAway === 0 && this.match.scoreHome === 0) {
      this.match.scoreHome = null;
      this.match.scoreAway = null;
    } else {
      this.isEditingScores = false;
      this.matchService.updateScore(this.match.id, this.match.scoreHome, this.match.scoreAway)
        .subscribe(data => {
          this.alertService.success('Poprawnie ustawiono wynik ' + data.scoreHome + ':' + data.scoreAway + '.');
        });
    }
  }

  canEdit(): boolean {
    return this.match.teamAway !== null && this.match.teamHome !== null;
  }

  setHelper(): boolean {
    this.helper = true;
    return this.helper;
  }

  isButtonDisabled() {
    return this.match.scoreHome === this.match.scoreAway;
  }

  isDisabled() {
    if (this.currentUser !== null && this.currentUser.id === this.tournament.organizerId) {
      this.isDateButtonDisabled = false;
    }
  }
}
