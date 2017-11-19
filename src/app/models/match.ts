import {Team} from './team';

export class Match {
  private _id: number;
  private _nextMatchId: number;
  private _startDate: Date;
  private _teamAway: Team;
  private _teamHome: Team;
  private _scoreAway: number;
  private _scoreHome: number;
  private _tournamentId: number;
  private _phase: number;

  constructor(id: number, nextMatchId: number, startDate: Date, teamAway: Team, teamHome: Team,
              scoreAway: number, scoreHome: number, tournamentId: number, phase: number) {
    this._id = id;
    this._nextMatchId = nextMatchId;
    this._startDate = startDate;
    this._teamAway = teamAway;
    this._teamHome = teamHome;
    this._scoreAway = scoreAway;
    this._scoreHome = scoreHome;
    this._tournamentId = tournamentId;
    this._phase = phase;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nextMatchId(): number {
    return this._nextMatchId;
  }

  set nextMatchId(value: number) {
    this._nextMatchId = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get teamAway(): Team {
    return this._teamAway;
  }

  set teamAway(value: Team) {
    this._teamAway = value;
  }

  get teamHome(): Team {
    return this._teamHome;
  }

  set teamHome(value: Team) {
    this._teamHome = value;
  }

  get scoreAway(): number {
    return this._scoreAway;
  }

  set scoreAway(value: number) {
    this._scoreAway = value;
  }

  get scoreHome(): number {
    return this._scoreHome;
  }

  set scoreHome(value: number) {
    this._scoreHome = value;
  }

  get tournamentId(): number {
    return this._tournamentId;
  }

  set tournamentId(value: number) {
    this._tournamentId = value;
  }

  get phase(): number {
    return this._phase;
  }

  set phase(value: number) {
    this._phase = value;
  }

}
