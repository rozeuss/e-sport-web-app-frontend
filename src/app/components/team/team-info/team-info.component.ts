import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../../models/team';
import {Player} from '../../../models/player';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {PlayerService} from '../../../services/player/player.service';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  @Input() team: Team;
  players: Array<Player>;

  data: any;
  msgs: Message[];

  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    };
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

  selectData(event) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Data Selected',
      'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]
    });
  }
}
