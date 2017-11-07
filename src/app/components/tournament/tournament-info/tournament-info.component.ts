import {Component, Input, OnInit} from '@angular/core';
import {Tournament} from '../../../models/tournament';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Match} from '../../../models/match';
import {TeamService} from '../../../services/team/team.service';
import {Team} from '../../../models/team';

@Component({
  selector: 'app-tournament-info',
  templateUrl: './tournament-info.component.html',
  styleUrls: ['./tournament-info.component.css']
})
export class TournamentInfoComponent implements OnInit {

  @Input() tournament: Tournament;
  matches: Array<Match>;
  teams: Array<Team>;

  constructor(private route: ActivatedRoute, private location: Location, private teamService: TeamService) {
    console.log(route);
  }

  ngOnInit() {
  // snapshot nie uzywa observable, lepiej robic this.route.paramMap.switchMap
    this.tournament = this.route.snapshot.data['tournament'];
    this.matches = this.route.snapshot.data['tournamentMatches'];
    this.route.paramMap.subscribe(TEST => {
    });
    this.teamService.findAllSignedForTournament(this.tournament.id).subscribe(teams => {
      console.log(teams);
      this.teams = teams;
    });
    // this.tournament = this.route.snapshot.data['tournament'];
    // this.matches = this.route.snapshot.data['matches'];
    // this.route.paramMap.switchMap((params: ParamMap) => this.tournamentService.findById(+params.get('id')))
    //   .subscribe(tournament => {
    //     console.log(tournament);
    //     // this.tournament = tournament;
    //     this.matchService.findAllByTournamentId(this.tournament.id).subscribe(matches => {
    //       console.log(matches);
    //       this.matches = matches;
    //     });
    //     this.teamService.findAllSignedForTournament(this.tournament.id).subscribe(teams => {
    //       console.log(teams);
    //       this.teams = teams;
    //     });
    //   });

  }

  goBack(): void {
    this.location.back();
  }

  signUp(): void {
    console.log('NO ZARA TO ZROBIE CZEGO');
  }

}
