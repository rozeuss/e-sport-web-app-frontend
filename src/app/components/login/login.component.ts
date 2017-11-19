import {Component, Inject, Input, OnInit} from '@angular/core';
import {BsModalRef, ModalDirective} from 'ngx-bootstrap';
import {AlertService} from '../../services/alert/alert.service';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NavComponent} from '../nav/nav.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  @Input() thisModal: ModalDirective;
  @Input() navbar: any;

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(): void {
    this.authenticationService.login(this.model.username, this.model.password).subscribe(
      data => {
        if (data) {
          this.navbar.ngOnInit();
          this.thisModal.hide();
        } else {
          this.alertService.error('Niepoprawne dane logowania.');
        }
      },
      error =>  {
        console.log(error);
        this.alertService.error(error);
      });

  }
}
