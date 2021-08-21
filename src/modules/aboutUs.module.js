import { Module } from "../core/module";

export class AboutUs extends Module {
  constructor(type, text) {
    super(type, text);

    this.aboutContainer = document.createElement("div");
    this.aboutContainer.className = "about-container";

    this.photoBlock = document.createElement("div");
    this.photoBlock.className = "photo-block";
    this.photoImg = document.createElement("img");
    this.photoImg.className = "photo-img";
    this.photoImg.src = "src/img/0.jpg";
    this.photoBlock.append(this.photoImg);

    this.contactBlock = document.createElement("div");
    this.contactBlock.className = "inform-block";
    this.contactInfo = document.createElement("p");
    this.contactInfo.className = "contact-info";
    this.contactInfo.innerHTML = `<br>Меня зовут:  Васильев Павел<br> <br>Группа:    6 <br><br> Команда:   1<br><br>Почта: <a href='mailto:pavell.vasiliev@gmail.com'>pavell.vasiliev@gmail.com</a>`;
    this.contactBlock.append(this.contactInfo);

    this.aboutBlock = document.createElement("div");
    this.aboutBlock.className = "about-block";
    this.aboutInfo = document.createElement("p");
    this.aboutInfo.className = "info-block";
    this.aboutInfo.textContent =
      "Я начал изучать JavaScript относительно недавно, около полугода назад. На этом курсе понял, что за месяц обучения по программе Владилена я узнал больше, чем за полгода самостоятельного изучения JS. В этом проекте выступал в роли TeamLeader, получил очень важный для себя опыт и интересные задачи.";
    this.aboutBlock.append(this.aboutInfo);

    // navigation arrow
    // right
    this.arrowRight = document.createElement("div");
    this.arrowRight.className = "arrow-right button";
    this.arrowRight.id = "right";
    this.arrowRightTop = document.createElement("div");
    this.arrowRightTop.className = "arrow-right-top";
    this.arrowRightBottom = document.createElement("div");
    this.arrowRightBottom.className = "arrow-right-bottom";
    this.arrowRight.append(this.arrowRightTop, this.arrowRightBottom);

    // left
    this.arrowLeft = document.createElement("div");
    this.arrowLeft.className = "arrow-left button";
    this.arrowLeft.id = "left";
    this.arrowLeftTop = document.createElement("div");
    this.arrowLeftTop.className = "arrow-left-top";
    this.arrowLeftBottom = document.createElement("div");
    this.arrowLeftBottom.className = "arrow-left-bottom";
    this.arrowLeft.append(this.arrowLeftTop, this.arrowLeftBottom);

    this.aboutContainer.append(
      this.photoBlock,
      this.contactBlock,
      this.aboutBlock,
      this.arrowRight,
      this.arrowLeft
    );

    this.aboutContainer.addEventListener("click", (event) => {
      const { target } = event;
      const targetButton = target.closest(".button").id;

      if (targetButton === "right") {
        console.log("yes");
      }
    });
  }

  trigger() {
    document.body.append(this.aboutContainer);
  }
}

const developers = [
  {
    name: "Васильев Павел",
    group: 6,
    team: 1,
    email: "pavell.vasiliev@gmail.com",
    info: "Я начал изучать JavaScript относительно недавно, около полугода назад. На этом курсе понял, что за месяц обучения по программе Владилена я узнал больше, чем за полгода самостоятельного изучения JS. В этом проекте выступал в роли TeamLeader, получил очень важный для себя опыт и интересные задачи.",
  },
];
