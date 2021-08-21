import { Module } from "../core/module";

export class AboutUs extends Module {
  constructor(type, text) {
    super(type, text);

    this.developer = 0;

    this.aboutContainer = document.createElement("div");
    this.aboutContainer.className = "about-container";

    this.photoBlock = document.createElement("div");
    this.photoBlock.className = "photo-block";
    this.photoImg = document.createElement("img");
    this.photoImg.className = "photo-img";
    this.photoImg.src = `src/img/${this.developer}.jpg`;
    this.photoBlock.append(this.photoImg);

    this.contactBlock = document.createElement("div");
    this.contactBlock.className = "inform-block";
    this.contactInfo = document.createElement("p");
    this.contactInfo.className = "contact-info";
    this.contactInfo.innerHTML = `<br>Меня зовут:  ${
      developers[this.developer].name
    } <br> <br>Группа: ${
      developers[this.developer].group
    } <br><br> Команда:   ${
      developers[this.developer].team
    }<br><br>Почта: <a href='mailto:${developers[this.developer].email}'>${
      developers[this.developer].email
    }</a>`;
    this.contactBlock.append(this.contactInfo);

    this.aboutBlock = document.createElement("div");
    this.aboutBlock.className = "about-block";
    this.aboutInfo = document.createElement("p");
    this.aboutInfo.className = "info-block";
    this.aboutInfo.textContent = `${developers[this.developer].info}`;
    this.aboutBlock.append(this.aboutInfo);

    // navigation arrow
    // right
    this.arrowRight = document.createElement("div");
    this.arrowRight.className = "arrow-right buttonNav";
    this.arrowRight.id = "right";
    this.arrowRightTop = document.createElement("div");
    this.arrowRightTop.className = "arrow-right-top";
    this.arrowRightBottom = document.createElement("div");
    this.arrowRightBottom.className = "arrow-right-bottom";
    this.arrowRight.append(this.arrowRightTop, this.arrowRightBottom);

    // left
    this.arrowLeft = document.createElement("div");
    this.arrowLeft.className = "arrow-left buttonNav";
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
      const targetButton = target.closest(".buttonNav").id;

      if (targetButton === "right") {
        this.developer += 1;
      } else if (targetButton === "left") {
        this.developer -= 1;
      }
      if (this.developer > 4) {
        this.developer = 0;
      } else if (this.developer < 0) {
        this.developer = 4;
      }
      this.photoImg.src = ``;
      this.photoImg.src = `src/img/${this.developer}.jpg`;

      this.contactInfo.innerHTML = `<br>Меня зовут:  ${
        developers[this.developer].name
      } <br> <br>Группа: ${
        developers[this.developer].group
      } <br><br> Команда:   ${
        developers[this.developer].team
      }<br><br>Почта: <a href='mailto:${developers[this.developer].email}'>${
        developers[this.developer].email
      }</a>`;

      this.aboutInfo.textContent = `${developers[this.developer].info}`;
    });
  }

  trigger() {
    const container = document.querySelector(".container");
    container.append(this.aboutContainer);
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
  {
    name: "Коренская Алиса",
    group: 6,
    team: 1,
    email: "korenskayaalice@gmail.com",
    info: "Я давно интересуюсь программированием, но мне не хватало уверенности в себе, чтобы двигаться дальше.  Структура, дедлайны, вебинары от психолога и командная работа на курсе Владилена помогли мне сдвинуться с мертвой точки, позакрывать пробелы в JS и начать изучать React. А самый ценный опыт для меня  - командная работа, которая получилась очень продуктивной.",
  },
  {
    name: "Гончаров Антон",
    group: 6,
    team: 1,
    email: "goncharov97@inbox.ru",
    info: "Я и IT довольно давние друзья, но мне всегда было тяжело определиться с направлением, меня бросало то в одну, то в другую нишу, как лодку во время шторма. Курс Владилена дал мне вектор движения. Дедлайны и структурированная подача материала помогают более осознанно подходить к обучению.",
  },
  {
    name: "Хомутов Богдан",
    group: 6,
    team: 1,
    email: "khomutovb@gmail.com",
    info: "С JavaScript познакомился во время университета, но не хватило мотивации изучить его. Не знал, что в дальнейшем свяжу свою сферу деятельности с IT. Выбрал для себя Front-end, так как увидел в этом большую перспективу по развитию, а мотивацию как раз получил благодаря курсу Владидена",
  },
  {
    name: "Егамбердиев Саид-Акбар",
    group: 6,
    team: 1,
    email: "johnreedreal@gmail.com",
    info: "Если не ошибаюсь, в декабре прошлого года я начал изучать JavaScript, просматривая видео Владилина Минина на YouTube. Затем я нашел его видеоуроки от Udemy, но подумал, что еще слишком рано их покупать и изучать. Когда 8 мая я узнал, что выиграл гринкарту, я намеревался изучить JavaScript в течение года, а в следующем году работать Frontend разработчиком в Америке.",
  },
];
