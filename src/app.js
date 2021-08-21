import "./styles.css";
import { ContextMenu } from "./menu";
import { ShapeModule } from "./modules/shape.module";
import { BackgroundModule } from "./modules/background.module";

export default class App {
  constructor() {}

  run() {
    //  const shapeMD = new ShapeModule("shape - md", "modul");
    const backgroundMD = new BackgroundModule("background - md", "modul");

    document.oncontextmenu = function () {
      return false;
    };

    const contextMenu = new ContextMenu("ul");
    //  contextMenu.add(shapeMD.toHTML());
    //  contextMenu.add(backgroundMD.toHTML());

    document.body.addEventListener("click", (event) => {
      if (event.target.offsetParent == document.body) {
        const shapeMD = new ShapeModule("shape - md", "modul");
        shapeMD.trigger();
      }
    });
  }
}
