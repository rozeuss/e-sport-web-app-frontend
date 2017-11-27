import {Component, Input, OnInit} from '@angular/core';
import {Tournament} from '../../../models/tournament';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Match} from '../../../models/match';
import {TeamService} from '../../../services/team/team.service';
import {Team} from '../../../models/team';
import {TournamentService} from '../../../services/tournament/tournament.service';
import {MatchService} from '../../../services/match/match.service';
import {TreeNode} from 'primeng/primeng';
import {AlertService} from '../../../services/alert/alert.service';


@Component({
  selector: 'app-tournament-info',
  templateUrl: './tournament-info.component.html',
  styleUrls: ['./tournament-info.component.css']
})
export class TournamentInfoComponent implements OnInit {
  data: TreeNode[];
  @Input() tournament: Tournament;
  matches: Array<Match>;
  teams: Array<Team>;
  signUpDisabled: Boolean = true;
  matchPhaseMap: Map<number, Match[]>;
  playoff: Match;
  winner: Team;
  currentUser: any;

  constructor(private route: ActivatedRoute, private location: Location, private teamService: TeamService,
              private tournamentService: TournamentService, private matchService: MatchService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    // snapshot nie uzywa observable, lepiej robic this.route.paramMap.switchMap
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.tournament = this.route.snapshot.data['tournament'];
    this.matches = this.route.snapshot.data['tournamentMatches'];
    this.prepareMatchPhaseMap();
    // this.route.paramMap.subscribe(TEST => {
    // });
    this.isAlreadySigned();
    this.teamService.findAllSignedForTournament(this.tournament.id).subscribe(teams => {
      this.teams = teams;
    });
    this.getWinner();
  }

  private prepareMatchPhaseMap() {
    this.matchPhaseMap = new Map<number, Match[]>();
    const phases = Array.from(new Set(this.matches.map(match => match.phase)));
    const openingPhase = Math.max(...phases);
    for (let phase = openingPhase; phase >= 0; phase--) {
      const match = this.matches.filter(i => i.phase === phase);
      this.matchPhaseMap.set(phase, match);
    }
    if (this.matchPhaseMap.get(0)) {
      this.playoff = this.matchPhaseMap.get(0).pop();
    }
  }

  goBack(): void {
    this.location.back();
  }

  signUp(): void {
    this.tournamentService.signUpForTournament(this.tournament.id, this.currentUser.id).subscribe(data => {
        this.signUpDisabled = true;
        this.matchService.findAllByTournamentId(this.tournament.id).subscribe(data2 => {
          this.matches = data2;
          this.prepareMatchPhaseMap();
          this.alertService.success('Poprawnie zapisano na mecz.');
        });
        this.teamService.findAllSignedForTournament(this.tournament.id).subscribe(teams => {
          this.teams = teams;
        });
      },
      error2 => {
        this.alertService.error('Nie udało się zapisać na mecz.');
      });
  }

  isAlreadySigned() {
    if (this.currentUser) {
      this.tournamentService.isTeamAlreadySignedForTournament(this.tournament.id, this.currentUser.id)
        .subscribe(data => this.signUpDisabled = data);
    }
  }


  isWinner(match, score): boolean {
    if (match === null || score === null || score === 0) {
      return false;
    }
    const scores: number[] = [];
    scores.push(match.scoreAway);
    scores.push(match.scoreHome);
    const winnerScore = Math.max(...scores);
    return score === winnerScore;
  }

  getWinner() {
    const finalMatch = this.matchPhaseMap.get(1)[0];
    if (finalMatch.scoreHome !== null && finalMatch.scoreAway !== null && finalMatch.scoreHome > finalMatch.scoreAway) {
      this.winner = finalMatch.teamHome;
    } else if (finalMatch.scoreHome !== null && finalMatch.scoreAway !== null && finalMatch.scoreHome < finalMatch.scoreAway) {
      this.winner = finalMatch.teamAway;
    }
  }
}
