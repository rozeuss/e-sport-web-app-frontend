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
  signUpDisabled: Boolean = false;
  matchPhaseMap: Map<number, Match[]> ;
  playoff: Match;
  constructor(private route: ActivatedRoute, private location: Location, private teamService: TeamService,
              private tournamentService: TournamentService, private matchService: MatchService) {
    console.log(route);
  }

  ngOnInit() {
    // snapshot nie uzywa observable, lepiej robic this.route.paramMap.switchMap

    this.tournament = this.route.snapshot.data['tournament'];
    this.matches = this.route.snapshot.data['tournamentMatches'];
    this.prepareMatchPhaseMap();

    this.route.paramMap.subscribe(TEST => {
    });


    this.isAlreadySigned();
    this.teamService.findAllSignedForTournament(this.tournament.id).subscribe(teams => {
      this.teams = teams;
    });
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
    // @TODO PRZEKAZYWAC TEAMID Z SECURITY
    this.tournamentService.signUpForTournament(this.tournament.id, 1).subscribe(data => {
        this.signUpDisabled = true;
        this.matchService.findAllByTournamentId(this.tournament.id).subscribe(data2 => {
          this.matches = data2;
          this.prepareMatchPhaseMap();
        });
        this.teamService.findAllSignedForTournament(this.tournament.id).subscribe(teams => {
          this.teams = teams;
        });
      },
      error2 => {
        console.log(error2);
      });
  }

  isAlreadySigned(): void {
    this.tournamentService.isTeamAlreadySignedForTournament(this.tournament.id, 1)
      .subscribe(data => this.signUpDisabled = data);
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
}
