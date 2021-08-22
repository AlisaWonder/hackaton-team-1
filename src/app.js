import "./styles.css";
import { ContextMenu } from "./menu";
import { AboutUs } from "./modules/aboutUs.module";
import { Timer } from "./modules/timer.module";
import { ShapeModule } from "./modules/shape.module";
import { Btn } from "./modules/btn.module";
import { BackgroundModule } from "./modules/background.module";
import { RandomSoundModule } from "./modules/randomSound.module";

export default class App {
  #contextMenu;
  #modules;

  constructor() {
    this.#contextMenu = new ContextMenu("ul");
    this.#modules = [
      new Timer("timer-md", "Таймер"),
      new ShapeModule("shape-md", "Генератор фигур"),
      new Btn("btn-md", "Убегающая кнопка"),
      new AboutUs("about-us-md", "Об авторах"),
      new BackgroundModule("backgroun-md", "Random Color"),
      new RandomSoundModule("random-sound-md", "Random Sound"),
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
