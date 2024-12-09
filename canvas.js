const FPS = 10;
const TOTAL_DOTS = 200;
const MAX_DOT_SIZE = 10; // px per FPS
const MIN_DOT_SIZE = 2; // px per FPS

const MAX_DOT_SPEED = 10; // px per FPS
const MIN_DOT_SPEED = 2; // px per FPS

const DOT_COLOR = "173, 232, 244";
const BACKGROUND_COLOR = "#222";

/** @type {HTMLCanvasElement} */

const canvas = new Canvas();
canvas.init();

setInterval(canvas.update, 1000 / FPS);

function Canvas() {
  let canv, ctx;

  const dots = new Dots();

  this.init = function () {
    canv = document.getElementById("background");
    ctx = canv.getContext("2d");

    canv.width = window.innerWidth;
    canv.height = window.innerHeight;
    drawBackground();

    dots.create(canv);
    dots.draw(ctx);
  };

  this.update = function () {
    drawBackground();
    dots.draw(ctx);
    dots.move(canv);
  };

  function drawBackground() {
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canv.width, canv.height);
  }
}

function Dots() {
  let dots = [TOTAL_DOTS];

  function Dot() {
    this.x;
    this.y;
    this.size;
    this.speed;

    this.init = function (canv) {
      this.size = Math.random() * MAX_DOT_SIZE;
      this.x = Math.random() * canv.width;
      this.y = Math.random() * canv.height;
      this.speed = Math.max(Math.random() * MAX_DOT_SPEED, MIN_DOT_SPEED);
    };

    this.reset = function (canv) {
      this.init(canv);
      this.y = canv.height + this.size;
    };
  }

  this.create = function (canv) {
    for (let i = 0; i < TOTAL_DOTS; i++) {
      dots[i] = new Dot();
      dots[i].init(canv);
    }
  };

  this.draw = function (ctx) {
    for (let i = 0; i < TOTAL_DOTS; i++) {
      let x = dots[i].x - dots[i].size * 0.5;
      let y = dots[i].y - dots[i].size * 0.5;
      let size = dots[i].size;
      let color = `rgba(${DOT_COLOR}, ${dots[i].size / MAX_DOT_SIZE})`;

      ctx.beginPath();
      ctx.fillRect(x, y, size, size);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }
  };

  this.move = function (canv) {
    for (let i = 0; i < TOTAL_DOTS; i++) {
      if (dots[i].y + dots[i].size < 0) {
        dots[i].reset(canv);
        continue;
      }

      dots[i].y -= dots[i].speed;
    }
  };
}
