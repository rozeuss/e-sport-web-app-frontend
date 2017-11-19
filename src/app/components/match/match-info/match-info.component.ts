import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../../../models/match';
import {ActivatedRoute} from '@angular/router';
import {DatePipe, Location} from '@angular/common';
import {ConfigurationService} from '../../../services/configuration/configuration.service';
import {TournamentService} from '../../../services/tournament/tournament.service';
import {Tournament} from '../../../models/tournament';
import {MatchService} from '../../../services/match/match.service';
import {Message} from 'primeng/primeng';

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


  constructor(private route: ActivatedRoute, private location: Location, public configurationService: ConfigurationService,
              private tournamentService: TournamentService, private matchService: MatchService, public datePipe: DatePipe) {

  }

  ngOnInit() {
    this.match = this.route.snapshot.data['match'];
    this.datepickerModel = new Date(this.match.startDate);
    this.tournamentService.findById(this.match.tournamentId).subscribe(data => {
      this.tournament = data;
      this.minDate = new Date(this.tournament.startDate);
      this.maxDate = new Date(this.tournament.endDate);
    });
  }

  goBack(): void {
    this.location.back();
  }

  updateDate(newDate: Date): void {
    console.log(newDate);
    console.log('siemanero');
    this.matchService.updateDate(this.match.id, this.datePipe.transform(newDate, 'yyyy-MM-dd')).subscribe(data => console.log(data));
  }

  editScores(): void {
    this.isEditingScores = true;
  }

  saveChanges(): void {
    this.isEditingScores = false;
    console.log('udalo!!');
    this.matchService.updateScore(this.match.id, this.match.scoreHome, this.match.scoreAway).subscribe(data => console.log(data));

  }

}
