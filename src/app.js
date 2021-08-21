import "./styles.css";
import { ContextMenu } from "./menu";
import { AboutUs } from "./modules/aboutUs.module";
import { Timer } from "./modules/timer.module";

export default class App {
  #aboutUsMD;
  #contextMenu;
  #timerMD;

  constructor() {
    this.#timerMD = new Timer("timer-md", "Таймер");
    this.#aboutUsMD = new AboutUs("about-us-md", "Об авторах");
    this.#contextMenu = new ContextMenu("ul");

    document.oncontextmenu = function () {
      return false;
    };

    document.body.addEventListener("click", (event) => {
      const { target } = event;
      const targetEl = document.querySelector(
        `[data-type = ${target.dataset.type}]`
      );
      console.log(targetEl);
    });
  }

  run() {
    this.#contextMenu.add(this.#timerMD.toHTML());
    this.#contextMenu.add(this.#aboutUsMD.toHTML());
  }
}
