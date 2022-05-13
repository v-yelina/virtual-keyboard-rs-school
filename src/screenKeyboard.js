import changeLanguage from './changeLanguage';
import {
  onBackspaceClick,
  onEnterClick,
  onDeleteClick,
  onTabClick,
} from './keyFunctions';

const screenKeyboard = () => {
  let isCapsOn = false;
  let isShiftOn = false;

  const charKeys = document.querySelectorAll('.character');
  const textarea = document.querySelector('.textarea');
  const backspace = document.querySelector('.backspace');
  const enter = document.querySelector('.enter');
  const del = document.querySelector('.del');
  const tab = document.querySelector('.tab');
  const caps = document.querySelector('.caps');
  const shift = document.querySelectorAll('.shift');

  for (let i = 0; i < charKeys.length; i += 1) {
    charKeys[i].addEventListener('click', () => {
      let text;
      const shiftText = charKeys[i].querySelector('.shift').textContent;
      if (isCapsOn) {
        text = charKeys[i].textContent[0].toUpperCase();
      } else {
        [text] = charKeys[i].textContent;
      }
      if (isShiftOn) {
        textarea.textContent += shiftText;
      } else {
        textarea.textContent += text;
      }

      const end = textarea.value.length;
      textarea.setSelectionRange(end, end);
      textarea.focus();
    });
  }

  backspace.addEventListener('click', () => {
    onBackspaceClick(textarea);
  });
  enter.addEventListener('click', () => {
    onEnterClick(textarea);
  });
  del.addEventListener('click', () => {
    onDeleteClick(textarea);
  });
  tab.addEventListener('click', () => {
    onTabClick(textarea);
  });
  caps.addEventListener('click', () => {
    if (isCapsOn) {
      isCapsOn = false;
    } else {
      isCapsOn = true;
    }
  });
  shift.forEach((item) => item.addEventListener('click', () => {
    if (isShiftOn) {
      isShiftOn = false;
    } else {
      isShiftOn = true;
    }
  }));

  const changeLanguageKey = document.querySelector('.lang-change');
  changeLanguageKey.addEventListener('click', changeLanguage);
};

export default screenKeyboard;
