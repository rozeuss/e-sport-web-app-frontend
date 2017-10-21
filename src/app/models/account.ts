export class Account {
  // readonly keyword. Readonly properties must be initialized at their declaration or in the constructor.
  // function buildName(firstName: string, lastName = "Smith") {

  private _id: number;
  private _email: string;
  private _password: string;
  private _accountTypeId: number;

  // constructor()
  constructor(id?: number, email?: string, password?: string, accountTypeId?: number) {
    this._id = id;
    this._email = email;
    this._password = password;
    this._accountTypeId = accountTypeId;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get accountTypeId(): number {
    return this._accountTypeId;
  }

  set accountTypeId(value: number) {
    this._accountTypeId = value;
  }
}
