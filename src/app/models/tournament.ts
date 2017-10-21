export class Tournament {

  private _id: number;
  private _description: string;
  private _location: string;
  private _startDate: Date;
  private _endDate: Date;
  private _prize: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get prize(): number {
    return this._prize;
  }

  set prize(value: number) {
    this._prize = value;
  }

  constructor(id: number, description: string, location: string, startDate: Date, endDate: Date, prize: number) {
    this._id = id;
    this._description = description;
    this._location = location;
    this._startDate = startDate;
    this._endDate = endDate;
    this._prize = prize;
  }
}
