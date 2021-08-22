import { Module } from "../core/module";
import { random } from "../utils";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const colors = [
      "#000000",
      "#36454F",
      "#023020",
      "#301934",
      "#343434",
      "#1B1212",
      "#28282B",
      "#191970",
      "#353935",
      "#900C3F",
      "#581845",
      "#151B54",
      "#033E3E",
    ];

    const randomColor = random(1, colors.length);
    const body = document.querySelector("body");
    body.style.backgroundColor = colors[randomColor];
  }
}
