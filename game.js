import { GameMenu } from "./menu";
import { GamePlay } from "./gameplay";

const screenMenu = document.querySelector("#menu");
const screenGameplay = document.querySelector("#gameplay");

export class Game {
  mode = 1; // 1. vs bot | 2. vs player 2
  player1Name = "";
  player2Name = "";
  level = 1; // 1 easy, 2 medium, 3 hard

  constructor() {
    this.showMenu();

    this.menu = new GameMenu(this);
    this.gameplay = new GamePlay(this);
  }

  showMenu() {
    screenMenu.classList.remove("hidden");
    screenGameplay.classList.add("hidden");
  }

  showGameplay() {
    screenGameplay.classList.remove("hidden");
    screenMenu.classList.add("hidden");
  }

  startGameplay() {
    this.showGameplay();
    this.gameplay.start();
  }
}
