import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {LoginComponent} from '../../components/login/login.component';

@Injectable()
export class AuthGuard implements CanActivate {
  bsModalRef: BsModalRef;

  constructor(private router: Router, private modalService: BsModalService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
    this.bsModalRef = this.modalService.show(LoginComponent);
    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
