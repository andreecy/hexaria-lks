import { getRandomInt } from "./utils";

// Game Play

var fps = 30;
var now;
var then = Date.now();
var interval = 1000 / fps;
var delta;

// radius hexagon
const r = 40;

export class GamePlay {
  player1Score = 0;
  player2Score = 0;
  currentNum = 0;

  constructor(game) {
    this.game = game;

    this.canvas = document.querySelector("#canvas");
    this.ctx = canvas.getContext("2d");

    this.canvas.width = 960;
    this.canvas.height = 700;

    this.canvas.addEventListener("click", this.handleClick);

    this.update();
  }

  drawHexagon(x, y, color = "transparent") {
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(x, y - r);
    this.ctx.lineTo(x + r, y - r / 2);
    this.ctx.lineTo(x + r, y + r / 2);
    this.ctx.lineTo(x, y + r);
    this.ctx.lineTo(x - r, y + r / 2);
    this.ctx.lineTo(x - r, y - r / 2);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawGrid() {
    const startX = 60 + r;
    const startY = 40 + r;

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 10; col++) {
        const x = col * r * 2;
        const y = row * r * 2;

        let xOffset = 0;
        let yOffset = row * -(r / 2); // setiap row bertambah, kurangi offset

        if (row % 2 == 1) {
          // row genap tambah offset x
          xOffset = r;
        }

        this.drawHexagon(startX + x + xOffset, startY + y + yOffset);
      }
    }
  }

  drawGui() {
    this.ctx.font = "14px sans-serif";
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "white";
    this.ctx.textBaseline = "top";

    this.ctx.fillText("Current:", canvas.width / 2, canvas.height - 130);
    this.ctx.fillText(
      this.currentNum,
      canvas.width / 2 + 50,
      canvas.height - 130,
    );

    // player 1
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(canvas.width / 2 - 130, canvas.height - 80, 15, 15);
    this.ctx.textAlign = "left";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      "Player1Name",
      canvas.width / 2 - 100,
      canvas.height - 80,
    );
    //score
    this.ctx.fillText(
      this.player1Score,
      canvas.width / 2 - 100,
      canvas.height - 50,
    );

    // player 2
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(canvas.width / 2 + 70, canvas.height - 80, 15, 15);
    this.ctx.textAlign = "left";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(
      "Player2Name",
      canvas.width / 2 + 100,
      canvas.height - 80,
    );
    //score
    this.ctx.fillText(
      this.player2Score,
      canvas.width / 2 + 100,
      canvas.height - 50,
    );
  }

  start() {
    console.log("gameplay start");
    // reset score
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentNum = 1;
  }

  // game loop
  update(now = 0) {
    now = Date.now();
    delta = now - then;

    if (delta > interval) {
      then = now - (delta % interval);
      this.ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
      this.drawGrid();
      this.drawGui();
      console.log("update");
    }

    window.requestAnimationFrame(this.update);
  }

  handleClick() {
    this.currentNum = getRandomInt(1, 20);
    console.log(this.currentNum);
  }
}
