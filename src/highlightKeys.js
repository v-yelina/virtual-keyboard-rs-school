import {
  onAltClick,
  onAltRelease,
  onCtrlClick,
  onCtrlRelease,
} from './keyFunctions';

const highlightKeys = () => {
  const isCapsOn = false;
  const isShiftOn = false;
  window.addEventListener(
    'keydown',
    function (event) {
      const pressedKey = this.document.querySelectorAll(
        `.${event.code.toLowerCase()}`,
      );
      pressedKey.forEach((item) => {
        item.classList.add('active');
        item.classList.add('animated-key');

        if (item.classList.contains('character')) {
          event.preventDefault();
          const textarea = this.document.querySelector('.textarea');
          let text;
          const shiftText = item.querySelector('.shift').textContent;
          if (isCapsOn) {
            text = item.textContent[0].toUpperCase();
          } else {
            [text] = item.textContent;
          }
          if (isShiftOn) {
            textarea.textContent += shiftText;
          } else {
            textarea.textContent += text;
          }

          const end = textarea.value.length;
          textarea.setSelectionRange(end, end);
          textarea.focus();
        }
      });
      if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
        onCtrlClick();
      } else if (event.code === 'AltLeft' || event.code === 'AltRight') {
        onAltClick();
      }
    },
    true,
  );
  window.addEventListener(
    'keyup',
    function (event) {
      const pressedKey = this.document.querySelectorAll(
        `.${event.code.toLowerCase()}`,
      );
      pressedKey.forEach((item) => {
        item.classList.remove('active');
        item.classList.remove('animated-key');
      });
      if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
        onCtrlRelease();
      } else if (event.code === 'AltLeft' || event.code === 'AltRight') {
        onAltRelease();
      }
    },
    true,
  );
};

export default highlightKeys;
