import {
  onBackspaceClick,
  onDeleteClick,
  onEnterClick,
  onAltClick,
  onAltRelease,
  onTabClick,
  onCtrlClick,
  onCtrlRelease,
} from "./keyFunctions";

const highlightKeys = () => {
  let isCapsOn = false;
  let isShiftOn = false;
  window.addEventListener(
    "keydown",
    function (event) {
      const pressedKey = this.document.querySelectorAll(
        `.${event.code.toLowerCase()}`
      );
      pressedKey.forEach((item) => {
        item.classList.add("active");
        item.classList.add("animated-key");

        if (item.classList.contains("caps")) {
          if (isCapsOn) {
            isCapsOn = false;
          } else {
            isCapsOn = true;
          }
        }
        if (item.classList.contains("shift")) {
          if (isShiftOn) {
            isShiftOn = false;
          } else {
            isShiftOn = true;
          }
        }

        const textarea = this.document.querySelector(".textarea");

        if (item.classList.contains("tab")) {
          event.preventDefault();
          onTabClick(textarea);
        }

        if (item.classList.contains("backspace")) {
          event.preventDefault();
          onBackspaceClick(textarea);
        }

        if (item.classList.contains("enter")) {
          event.preventDefault();
          onEnterClick(textarea);
        }

        if (item.classList.contains("del")) {
          event.preventDefault();
          onDeleteClick(textarea);
        }

        if (item.classList.contains("character")) {
          event.preventDefault();
          let text;
          const shiftText = item.querySelector(".shift").textContent;
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
      if (event.code === "ControlLeft" || event.code === "ControlRight") {
        onCtrlClick();
      } else if (event.code === "AltLeft" || event.code === "AltRight") {
        onAltClick();
      }
    },
    true
  );
  window.addEventListener(
    "keyup",
    function (event) {
      const pressedKey = this.document.querySelectorAll(
        `.${event.code.toLowerCase()}`
      );
      pressedKey.forEach((item) => {
        item.classList.remove("active");
        item.classList.remove("animated-key");
      });
      if (event.code === "ControlLeft" || event.code === "ControlRight") {
        onCtrlRelease();
      } else if (event.code === "AltLeft" || event.code === "AltRight") {
        onAltRelease();
      }
    },
    true
  );
};

export default highlightKeys;
