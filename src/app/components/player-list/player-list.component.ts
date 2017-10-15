import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../services/player/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
 // providers: [PlayerService]
})
export class PlayerListComponent implements OnInit {
  players: Array<any>;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.findAll().subscribe(
      data => {
        this.players = data;
      },
      error => console.error(error)
    );
  }

}
