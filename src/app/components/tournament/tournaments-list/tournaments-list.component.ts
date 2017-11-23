import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Tournament} from '../../../models/tournament';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.css']
})
export class TournamentsListComponent implements OnInit {
  tournaments: Array<Tournament>;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.tournaments = this.route.snapshot.data['tournamentList'];
  }
}
