export default class GameStateService {
  constructor(storage) {
    this.storage = storage;
  }

  save(state) {
    let stateObj = state;
    let objState = {
      activeChar: stateObj.activeChar,
      activeCharUser: stateObj.activeCharUser,
      attackCells: stateObj.attackCells,
      history: stateObj.history,
      indexSelect: stateObj.indexSelect,
      levelGame: stateObj.levelGame,
      transitionCells: stateObj.transitionCells,
      userTeam: stateObj.userTeam,
    };
    this.storage.setItem("state", JSON.stringify(objState));
    alert("Сохранено!!!");
  }

  load() {
    try {
      alert("Сохранение загружено!!!");
      return JSON.parse(this.storage.getItem("state"));
    } catch (e) {
      throw new Error("Invalid state");
    }
  }
}
