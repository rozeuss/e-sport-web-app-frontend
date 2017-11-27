import {Component, OnInit} from '@angular/core';
import {Country} from '../../models/country.enum';
import {NgForm} from '@angular/forms';
import {AccountService} from '../../services/account/account.service';
import {TeamService} from '../../services/team/team.service';
import {AlertService} from '../../services/alert/alert.service';
import {SortPipe} from '../../pipes/sort-pipe';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  countriesEnum = Object.keys(Country).map(k => Country[k])
    .filter(v => typeof v === 'string')
    .sort() as string[];
  levels: Array<Object> = new Array(...this.countriesEnum);

  constructor(private accountService: AccountService, private teamService: TeamService,
              private alertService: AlertService, private sortPipe: SortPipe) {
  }

  ngOnInit() {
  }

  register(form: NgForm) {
    this.accountService.findByEmail(this.model.inputEmail).subscribe((exists) => {
      if (exists !== '') {
        this.accountService.create(this.model.inputEmail, this.model.inputPassword).subscribe(account => {
          this.teamService.create(this.model.inputName, this.model.inputCountry, account.id).subscribe(data => {
            this.alertService.success('Poprawnie utworzono konto.');
            form.reset();
          }, error => {
          });
        }, error => {
          this.alertService.error('Wystąpił błąd przy tworzeniu konta.');
        });
      } else {
        this.alertService.error('Podany email istnieje w bazie danych.');
      }
    });
  }
}
