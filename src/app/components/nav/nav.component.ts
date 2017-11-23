import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService, ModalDirective} from 'ngx-bootstrap';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {Team} from '../../models/team';
import {TeamService} from '../../services/team/team.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  bsModalRef: BsModalRef;
  message: string;
  currentUser: any;
  team: Team;
  @ViewChild('childModal') childModal: ModalDirective;


  constructor(private modalService: BsModalService, private authenticationService: AuthenticationService,
              private teamService: TeamService) {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser) {
      this.teamService.findByAccountId(this.currentUser.id).subscribe(data => this.team = data);
    }
  }

  showChildModal(): void {
    this.childModal.show();
  }

  logout(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm() {
    this.authenticationService.logout();
    this.bsModalRef.hide();
    this.ngOnInit();
  }

  decline() {
    this.bsModalRef.hide();
  }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
    this.showChildModal();
    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
