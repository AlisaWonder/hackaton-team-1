import { Module } from "../core/module";
import * as Utils from "../utils";

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
    //  this.type = "Shapes";
    //  this.text = "Модуль, который создает фигуры";
  }

  trigger() {
    function RandColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      console.log(color);
      return color;
    }

    let canvas = document.createElement("canvas");
    canvas.id = "canvas";
    //  canvas.type = "shape";
    const container = document.querySelector(".container");
    container.append(canvas);
    let ctx = canvas.getContext("2d");

    const width = (canvas.width = innerWidth);
    const height = (canvas.height = innerHeight);

    let randomShape = Utils.random(1, 5);
    console.log(randomShape);
    if (randomShape == 1) {
      ctx.fillStyle = RandColor();
      ctx.fillRect(Math.random() * width, Math.random() * height, 150, 150);
    } else if (randomShape == 2) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.closePath();
      ctx.fillStyle = RandColor();
      ctx.fill();
    } else if (randomShape == 3) {
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      let radius = Math.floor(Math.random() * 500);
      ctx.fillStyle = RandColor();
      ctx.arc(x, y, radius, Math.PI * 2, 0, false);
      ctx.fill();
      ctx.closePath();
    } else if (randomShape == 4) {
      ctx.font = "bold 25px Montserrat,sans-serif";
      ctx.lineWidth = 1;
      ctx.strokeStyle = RandColor();
      ctx.strokeText(
        "Мы любим JavaScript",
        Math.random() * width,
        Math.random() * height
      );
    } else if (randomShape == 5) {
      ctx.font = "bold 25px Montserrat,sans-serif";
      ctx.lineWidth = 1;
      ctx.strokeStyle = RandColor();
      ctx.strokeText(
        "Чей модуль тут мог быть?",
        Math.random() * width,
        Math.random() * height
      );
    }
  }
}
