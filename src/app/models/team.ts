export class Team {
  constructor(private id, private name, private email, private country) {
  }

  get ID() {
    return this.id;
  } // TO NIE TO SAMO ID, mozna teraz sie odwolywac Team.ID, zalezy jak sobie ustalimy, tzw PROPERTY

  set ID(newValue) {
    this.id = newValue;
  }

  getId() {
    return this.id;
  }

  setId(newValue) {
    this.id = newValue;
  }
}
