export class Team {
  private _id: number;
  private _name: string;
  private _country: string;
  private _accountId: number;

  constructor(id: number, name: string, country: string, accountId: number) {
    this._id = id;
    this._name = name;
    this._country = country;
    this._accountId = accountId;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get accountId(): number {
    return this._accountId;
  }

  set accountId(value: number) {
    this._accountId = value;
  }

}
