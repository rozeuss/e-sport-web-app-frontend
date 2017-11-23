import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Team} from '../../../models/team';
import {Player} from '../../../models/player';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PlayerService} from '../../../services/player/player.service';
import {Message} from 'primeng/primeng';
import {TeamService} from '../../../services/team/team.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AlertService} from '../../../services/alert/alert.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  bsModalRef: BsModalRef;
  @Input() team: Team;
  players: Array<Player>;
  newPlayer: Player;
  teamStatisticsReport: any;
  currentUser: any;
  placesReportData: any;
  matchesReportData: any;
  msgs: Message[];

  constructor(private modalService: BsModalService, private route: ActivatedRoute,
              private location: Location, private playerService: PlayerService,
              private teamService: TeamService, private alertService: AlertService) {
    this.matchesReportData = {
      labels: ['Rozegrane', 'Wygrane', 'Przegrane'],
      datasets: [
        {
          label: 'Liczba meczy',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5'
        }
      ]
    };
    this.placesReportData = {
      labels: ['Pierwsze', 'Drugie', 'Trzecie'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.team = this.route.snapshot.data['team'];
    this.playerService.findAllByTeamId(this.team.id).subscribe(data => {
      this.players = data;
    });
    this.teamService.getTeamStatistics(this.team.id).subscribe(data => {
      this.teamStatisticsReport = data;
      const reportValues = [];
      for (const key of Object.keys(this.teamStatisticsReport)) {
        reportValues.push(data[key]);
      }
      this.matchesReportData.datasets[0].data = reportValues.slice(0, 3);
      this.placesReportData.datasets[0].data = reportValues.slice(3, 6);
    });
  }

  goBack(): void {
    this.location.back();
  }

  addPlayer(player: Player) {
    this.playerService.create(player.playerName, player.firstName, player.lastName, this.team.id).subscribe(data => {
      this.players.push(data);
      this.alertService.success('Poprawnie utworzono zawodnika.');
    }, error2 => this.alertService.error('Nie udało się utworzyć zawodnika.'));
  }

  selectData(event) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Data Selected',
      'detail': this.matchesReportData.datasets[event.element._datasetIndex].data[event.element._index]
    });
  }

  openModal(template: TemplateRef<any>) {
    this.newPlayer = new Player(null, null, null, null, null);
    this.bsModalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm() {
    this.addPlayer(this.newPlayer);
    this.bsModalRef.hide();
  }

  decline() {
    this.bsModalRef.hide();
  }

  isPermitted() {
    return this.currentUser.id === this.team.accountId;
  }
}
