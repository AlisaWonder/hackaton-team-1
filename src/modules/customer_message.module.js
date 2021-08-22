import { Module } from '../core/module';
import { setAttributesElement } from '../utils';

export class CustomerMessage extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    const container = document.querySelector('.container');
    customerMessage(container);
    

    function randomArr(min, max) {
      return Math.round(Math.random() * (max - min + 1) + min);
    }

    function customerMessage(container) {
      let quotes = [
        {
          author: 'Мэрилин Монро',
          text: '«Никогда не возвращайся к тому, от чего решила уйти. Как бы сильно тебя ни просили и как бы тебе ни хотелось самой. Покорив одну гору, начинай штурмовать другую...»',
        },
        {
          author: 'Илон Маск',
          text: '«Многие не любят перемен, но мы должны научиться принимать их. Особенно если альтернатива переменам – это катастрофа»',
        },
        {
          author: 'Чезаре Павезе',
          text: '«Мы помним моменты, а не дни»',
        },
        {
          author: 'Ричард Бах',
          text: '«Если вы хотите иметь то, что никогда не имели, – начните делать то, что никогда не делали»',
        },
        {
          author: 'Шарль де Голль',
          text: '«Всегда выбирайте самый трудный путь – там вы не встретите конкурентов»',
        },
        {
          author: 'Марк Твен',
          text: '«Самый лучший способ встряхнуть себя – это встряхнуть кого-нибудь другого»',
        },
      ];
      let bg_color = ['#303B3A', '#364241', '#647A79', '#6F8785', '#4F615F'];
      let color_block = bg_color[randomArr(0, bg_color.length - 2)];
      let color_bg = bg_color[randomArr(0, bg_color.length - 2)];
      let main_block = document.createElement('div');
      main_block.className = 'customer__message';
      const message_body = document.createElement('div');
      message_body.className = 'message-customer__body';
      let text = document.createElement('p');
      text.className = 'message-customer message-customer__text';
      let author = document.createElement('p');
      author.className = ' message-customer  message-customer__author';
      message_body.append(text, author);
      main_block.append(message_body);
      container.append(main_block);
      console.log(quotes);
      let quote = quotes[randomArr(0, quotes.length - 2)];
      text.textContent = quote.text;
      author.textContent = quote.author;
      message_body.style.background = color_bg;
      setInterval(() => {changeQuote(message_body,main_block, color_bg, bg_color, quotes, text, author)}, 5000);
    }
    function changeQuote(message_body, main_block, color_bg, bg_color, quotes, text, author) {
      message_body.style.transform = 'scale(150)';
      main_block.style.background = color_bg;
      color_bg = bg_color[randomArr(0, bg_color.length - 2)];
      let quote = quotes[randomArr(0, quotes.length - 2)];
      setTimeout(() => {
        console.log('hjhhhj');
        color_bg = bg_color[randomArr(0, bg_color.length - 2)];
        message_body.style.background = color_bg;
        text.textContent = quote.text;
        author.textContent = quote.author;
        message_body.style.transform = 'scale(1)';
      }, 1000);
    }

  }
}
