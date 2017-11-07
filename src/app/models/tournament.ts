export class Tournament {

  private _id: number;
  private _description: string;
  private _location: string;
  private _startDate: string;
  private _endDate: string;
  private _prize: number;
  private _title: string;
  private _organizerId: number;

  constructor(id: number, description: string, location: string, startDate: string, endDate: string,
              prize: number, title: string, organizerId: number) {
    this._id = id;
    this._description = description;
    this._location = location;
    this._startDate = startDate;
    this._endDate = endDate;
    this._prize = prize;
    this._title = title;
    this._organizerId = organizerId;
  }


  get organizerId(): number {
    return this._organizerId;
  }

  set organizerId(value: number) {
    this._organizerId = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

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

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }

  get prize(): number {
    return this._prize;
  }

  set prize(value: number) {
    this._prize = value;
  }
}
