import { Module } from "../core/module";
import * as Utils from "../utils";

export class Btn extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const btn = document.createElement("button");
    const container = document.createElement("div");
    container.classList = "container__canva";
    btn.className = "button";
    btn.backgroundColor = `${Utils.RandColor()}`;
    btn.textContent = "Поймай меня, если сможешь";
    container.append(btn);
    document.body.append(container);

    const newBtn = document.querySelector(".button");
    newBtn.addEventListener("mouseenter", () => {
      btn.style.left = `${Utils.random(0, 80)}%`;
      btn.style.top = `${Utils.random(0, 80)}%`;
      btn.style.backgroundColor = ` ${Utils.RandColor()}`;
    });

    newBtn.addEventListener("click", () => {
      const title = document.createElement("h2");
      container.innerHTML = "";
      title.className = "btn__title";
      title.textContent =
        "Вы меня поймали! Хватит кликать, выберите другой модуль!";
      document.body.append(title);
    });
  }
}
