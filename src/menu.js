import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);

    document.body.addEventListener("contextmenu", (event) => {
      const { x } = event;
      const { y } = event;

      const info = document.querySelector(".container");
      if (info) {
        info.remove();
      }

      this.open(x, y);
    });
  }

  open(x, y) {
    this.el.classList.add("open");
    this.el.style.left = `${x}px`;
    this.el.style.top = `${y}px`;
  }

  close() {
    this.el.classList.remove("open");
  }

  add(modul) {
    this.el.insertAdjacentHTML("beforeend", modul);
  }
}
