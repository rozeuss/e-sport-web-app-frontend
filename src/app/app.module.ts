import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { PlayerListComponent } from './components/player-list/player-list.component';
import {PlayerService} from './services/player/player.service';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent} from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
