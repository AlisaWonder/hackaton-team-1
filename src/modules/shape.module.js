import { Module } from "../core/module";
import * as Utils from "../utils";

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    // data-type: shape - md

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
    const container = document.querySelector(".container");
    container.append(canvas);
    let ctx = canvas.getContext("2d");
    const width = (canvas.width = innerWidth);
    const height = (canvas.height = innerHeight);
    let randomShape = Utils.random(1, 6);

    let point = {
      x: Utils.random(150, width),
      y: Utils.random(150, height),
    };

    let size = 0;

    addEventListener("resize", () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    });

    function rectangleShape() {
      ctx.fillStyle = RandColor();
      ctx.fillRect(
        point.x,
        point.y,
        Utils.random(0, width),
        Utils.random(0, width)
      );
    }

    function triangleShape() {
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.closePath();
      ctx.fillStyle = RandColor();
      ctx.fill();
    }

    function circleShape() {
      let radius = Utils.random(0, 300);
      ctx.fillStyle = RandColor();
      ctx.arc(point.x, point.y, radius, Math.PI * 2, 0, false);
      ctx.fill();
      ctx.closePath();
    }

    function textShape(text) {
      ctx.font = "bold 20px Montserrat,sans-serif";
      ctx.lineWidth = 1;
      ctx.strokeStyle = RandColor();
      ctx.strokeText(text, point.x, point.y);
    }

    function surpriseShape() {
      ctx.fillStyle = "green";
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 50, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    let positionX = 0;

    function animate() {
      size += 0.05;
      positionX += 2;
      //draw each frame
      ctx.fillStyle = "green";
      ctx.strokeStyle = "white";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(positionX, point.y / 2, size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(animate);
    }

    if (randomShape == 1) {
      rectangleShape();
    } else if (randomShape == 2) {
      triangleShape();
    } else if (randomShape == 3) {
      circleShape();
    } else if (randomShape == 4) {
      textShape("Мы любим JS");
    } else if (randomShape == 5) {
      textShape("Чей модуль мог тут быть?");
    } else if (randomShape == 6) {
      animate();
    }
  }
}
