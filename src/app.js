import "./styles.css";
import { ContextMenu } from "./menu";
import { AboutUs } from "./modules/aboutUs.module";
import { Timer } from "./modules/timer.module";
import { ShapeModule } from "./modules/shape.module";

export default class App {
  #contextMenu;
  #modules;

  constructor() {
    this.#contextMenu = new ContextMenu("ul");
    this.#modules = [
      new Timer("timer-md", "Таймер"),
      new AboutUs("about-us-md", "Об авторах"),
      new ShapeModule("shape-md", "Генератор фигур"),
    ];

    document.oncontextmenu = function () {
      return false;
    };

    document.body.addEventListener("click", (event) => {
      const { target } = event;
      this.#modules.forEach((modul) => {
        if (modul.type === target.dataset.type) {
          modul.trigger();
          this.#contextMenu.close();
        }
      });
    });
  }

  run() {
    this.#modules.forEach((modul) => {
      this.#contextMenu.add(modul.toHTML());
    });
  }
}
