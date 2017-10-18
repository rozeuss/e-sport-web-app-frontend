import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentAddComponent } from './tournament-add.component';

describe('TournamentAddComponent', () => {
  let component: TournamentAddComponent;
  let fixture: ComponentFixture<TournamentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
