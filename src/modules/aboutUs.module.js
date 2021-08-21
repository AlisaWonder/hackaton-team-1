import { Module } from "../core/module";

export class AboutUs extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    console.log("yes");
  }
}
