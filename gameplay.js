// Game Play

// radius hexagon
const r = 40;

export class GamePlay {
  constructor(game) {
    this.game = game;

    this.canvas = document.querySelector("#canvas");
    this.ctx = canvas.getContext("2d");

    this.canvas.width = 960;
    this.canvas.height = 600;
  }

  drawHexagon(x, y, color = "white") {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y - r);
    this.ctx.lineTo(x + r, y - r / 2);
    this.ctx.lineTo(x + r, y + r / 2);
    this.ctx.lineTo(x, y + r);
    this.ctx.lineTo(x - r, y + r / 2);
    this.ctx.lineTo(x - r, y - r / 2);
    this.ctx.closePath();
    this.ctx.strokeStyle = color;
    this.ctx.stroke();
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
          console.log(row);
          xOffset = r;
        }

        this.drawHexagon(startX + x + xOffset, startY + y + yOffset);
      }
    }
  }

  start() {
    this.drawGrid();
  }
}
