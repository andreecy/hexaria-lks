// Game Menu

export class GameMenu {
  game = null;

  constructor(game) {
    this.game = game;

    this.mode1 = document.querySelector("#mode1");
    this.mode2 = document.querySelector("#mode2");
    this.name1input = document.querySelector("#name1");
    this.name2input = document.querySelector("#name2");
    this.player2Input = document.querySelector("#player2_input");
    this.levelSelect = document.querySelector("#level");
    this.playBtn = document.querySelector("#playbtn");

    // mode change handler
    this.mode1.addEventListener("click", () => {
      this.game.mode = 1;
      this.hidePlayer2Input();
      this.checkIfCanPlay();
    });

    this.mode2.addEventListener("click", () => {
      this.game.mode = 2;
      this.showPlayer2Input();
      this.checkIfCanPlay();
    });

    // player name change handler
    this.name1input.addEventListener("input", (e) => {
      this.game.player1Name = e.target.value;
      this.checkIfCanPlay();
    });

    this.name2input.addEventListener("input", (e) => {
      this.game.player2Name = e.target.value;
      this.checkIfCanPlay();
    });

    // level change handler
    this.levelSelect.addEventListener("change", (e) => {
      this.game.level = parseInt(e.target.value);
    });

    this.play = this.play.bind(this);

    this.playBtn.addEventListener("click", this.play);
  }

  hidePlayer2Input() {
    this.player2Input.style.display = "none";
  }

  showPlayer2Input() {
    this.player2Input.style.display = "block";
  }

  checkIfCanPlay() {
    const mode = this.game.mode;
    let disabled = false;
    if (mode == 1) {
      disabled = this.game.player1Name == "";
    } else if (mode == 2) {
      disabled = this.game.player2Name == "";
    }

    this.playBtn.disabled = disabled;
  }

  play() {
    this.game.startGameplay();
  }
}
