import {Injectable} from '@angular/core';

@Injectable()
export class ConfigurationService {
  bsDatepickerConfig = {containerClass: 'theme-dark-blue', locale: 'pl'};

  constructor() {
  }

}
