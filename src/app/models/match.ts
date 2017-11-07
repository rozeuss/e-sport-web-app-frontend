import {Team} from './team';

export class Match {
  private id: number;
  private nextMatchId: number;
  private startDate: Date;
  private teamAway: Team;
  private teamHome: Team;
  private scoreAway: number;
  private scoreHome: number;
  private tournamentId: number;
  private phase: number;
}
