import { Module } from "../core/module";

export class AboutUs extends Module {
  #aboutContainer;
  #photoBlock;

  constructor(type, text) {
    super(type, text);

    this.#aboutContainer = document.createElement("div");
    this.#aboutContainer.className = "about-container";

    this.#photoBlock = document.createElement("div");
  }

  trigger() {
    console.log("yes");
  }
}
