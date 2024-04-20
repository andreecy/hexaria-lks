const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = 960;
canvas.height = 600;

// jari jari
const r = 40;

function drawHexagon(x, y, color = "black") {
  ctx.beginPath();
  ctx.moveTo(x, y - r);
  ctx.lineTo(x + r, y - r / 2);
  ctx.lineTo(x + r, y + r / 2);
  ctx.lineTo(x, y + r);
  ctx.lineTo(x - r, y + r / 2);
  ctx.lineTo(x - r, y - r / 2);
  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.stroke();
}

const startX = 60 + r;
const startY = 40 + r;

function drawGrid() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 10; col++) {
      const x = col * r * 2 + startX;
      const y = row * r * 2 + startY;

      let xOffset = 0;
      let yOffset = (row * -r) / 2; // setiap row bertambah, kurangi offset

      if (row % 2 == 1) {
        // row genap tambah offset x
        console.log(row);
        xOffset = r;
      }

      drawHexagon(x + xOffset, y + yOffset);
    }
  }
}

function init() {
  drawGrid();
}

init();
