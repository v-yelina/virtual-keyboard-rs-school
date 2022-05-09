import keys from './keyLib';
import screenKeyboard from './screenKeyboard';

const renderKeyboard = (shift = false) => {
  // get language from local storage
  let lang;
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  } else {
    lang = 'en';
    localStorage.setItem('lang', 'en');
  }

  let keyText;
  let keyTextShift;
  const main = document.createElement('main');
  main.classList.add('main');

  // create textarea
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.cols = '100';

  // create keyboard
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard');
  let keysHtml = '';

  // create keys from keys array. key's text depends on language
  for (let i = 0; i < keys.length; i += 1) {
    if (lang === 'en') {
      keyText = keys[i].en;
      keyTextShift = keys[i].enShift;
    } else {
      keyText = keys[i].ru;
      keyTextShift = keys[i].ruShift;
    }

    keysHtml += `<div class='${keys[i].classList}'>${
      shift ? keyTextShift : keyText
    }<div class='shift'>${keyTextShift}</div></div>`;
  }
  keyboardWrapper.innerHTML = keysHtml;

  main.appendChild(textarea);
  main.appendChild(keyboardWrapper);
  document.body.appendChild(main);

  // add focus to textarea
  const end = textarea.value.length;
  textarea.setSelectionRange(end, end);
  textarea.focus();
  screenKeyboard();
};

export default renderKeyboard;
