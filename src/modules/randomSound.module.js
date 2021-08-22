import { Module } from "../core/module";
import { random } from "../utils";

export class RandomSoundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const soundLinks = [
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
      "http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg",
      "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a",
      "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a",
      "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav",
      "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav",
    ];
    function randomMusic() {
      const randomSound = random(1, soundLinks.length);
      console.log(randomSound);
      const audioObj = new Audio(soundLinks[randomSound - 1]);
      audioObj.play();
    }

    // const myDiv = body.querySelectorAll("div");
    // if (myDiv.length > 0) {
    //   while (body.childNodes.length > 2) {
    //     body.removeChild(body.lastChild);
    //   }
    // }
    randomMusic();
  }
}
