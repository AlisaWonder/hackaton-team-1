import { Module } from "../core/module";
import * as Utils from "../utils";

export class Btn extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const btn = document.createElement("button");
    const container = document.querySelector("div");
    container.classList = "container";
    btn.className = "button";
    btn.backgroundColor = `${Utils.RandColor()}`;
    btn.textContent = "Поймай меня, если сможешь";
    container.append(btn);

    const counter = document.createElement("p");
    let counterCount = 0;
    counter.style.color = "white";
    counter.style.paddingTop = "50px";
    counter.textContent = `${counterCount} - количество кликов`;
    container.append(counter);

    const newBtn = document.querySelector(".button");
    newBtn.addEventListener("mouseenter", () => {
      btn.style.left = `${Utils.random(0, 80)}%`;
      btn.style.top = `${Utils.random(0, 80)}%`;
      btn.style.backgroundColor = ` ${Utils.RandColor()}`;
    });

    container.addEventListener("click", () => {
      counterCount++;
      counter.textContent = `${counterCount} - количество кликов`;
    });

    newBtn.addEventListener("click", () => {
      const title = document.createElement("h2");
      title.className = "btn__title";
      title.textContent = `Вы меня поймали за ${counterCount} кликов! Хватит кликать, выберите другой модуль!`;
      container.append(title);
      newBtn.remove();
    });
  }
}
