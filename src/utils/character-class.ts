export class CharacterClass {
  private name: String;
  private active: boolean = false;
  setClass(charName: String) {
    this.name = charName;
  }
  getClass() {
    return this.name;
  }
  setActive(isActive: boolean) {
    this.active = isActive;
  }
  getActive() {
    return this.active;
  }
}
