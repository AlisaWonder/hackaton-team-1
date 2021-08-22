import { Module } from '../core/module';
import { setAttributesElement } from '../utils';

export class AdBlock extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    const container = document.querySelector('.container');
    AdBlock(container)
    function AdBlock(container) {

      const ad_block = document.createElement('div');
      ad_block.className = 'ad-baner';
      const baner_body = document.createElement('div');
      baner_body.className = 'ad-baner__body';
      const ad_text = document.createElement('p');
      ad_text.textContent = 'Здесь мог быть модуль с вашей рекламой';
      ad_text.className = 'ad-baner__text';
      const ad_btn = document.createElement('div');
      ad_btn.className = 'close__btn';
      const ad_img = document.createElement('img');
      ad_img.src = '/src/img/icon.svg';
      ad_img.width = '25';
      ad_img.height = '25';
      ad_btn.append(ad_img);
      baner_body.append(ad_text, ad_btn);
      ad_block.append(baner_body);
      window.onload = () => {
        ad_block.classList.add('active');
      };
      container.append(ad_block);

      ad_btn.addEventListener('click', () => {
        if (ad_block.classList.contains('active')) {
          ad_block.classList.remove('active');
        }
        ad_block.classList.add('closed');
      });
    }
  }
}
