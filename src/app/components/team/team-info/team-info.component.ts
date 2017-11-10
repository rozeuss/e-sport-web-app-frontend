import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../../models/team';
import {Player} from '../../../models/player';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {PlayerService} from '../../../services/player/player.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  @Input() team: Team;
  players: Array<Player>;


  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService) {
  }

  ngOnInit() {
    this.team = this.route.snapshot.data['team'];
    this.playerService.findAllByTeamId(this.team.id).subscribe(data => {
      this.players = data;
      console.log(data);
    });
    // this.route.paramMap.switchMap((params: Params) => this.playerService.findAllByTeamId(+params['id']))
    //   .subscribe(data => console.log(data));
  }

  goBack(): void {
    this.location.back();
  }

}
