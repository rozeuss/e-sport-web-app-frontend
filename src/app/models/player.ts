export class Player {
  private _id: number;
  private _playerName: string;
  private _firstName: string;
  private _lastName: string;
  private _teamId: number;

  constructor(id: number, playerName: string, firstName: string, lastName: string, teamId: number) {
    this._id = id;
    this._playerName = playerName;
    this._firstName = firstName;
    this._lastName = lastName;
    this._teamId = teamId;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get playerName(): string {
    return this._playerName;
  }

  set playerName(value: string) {
    this._playerName = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get teamId(): number {
    return this._teamId;
  }

  set teamId(value: number) {
    this._teamId = value;
  }


}
