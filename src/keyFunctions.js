import changeLanguage from './changeLanguage';

let isCtrlOn = false;
let isAltOn = false;

export const onBackspaceClick = (textarea) => {
  const textfield = textarea;
  if (textarea.selectionStart !== textarea.selectionEnd) {
    textfield.textContent = textarea.textContent.slice(0, textarea.selectionStart)
      + textarea.textContent.slice(textarea.selectionEnd);
  } else if (textarea.selectionStart) {
    textfield.textContent = textarea.textContent.slice(0, textarea.selectionStart - 1)
      + textarea.textContent.slice(textarea.selectionStart);
  } else {
    textfield.textContent = textarea.textContent.slice(
      0,
      textarea.textContent.length - 1,
    );
  }
  const end = textarea.value.length;
  textarea.setSelectionRange(end, end);
  textarea.focus();
};

export const onEnterClick = (textarea) => {
  const textfield = textarea;
  if (textarea.selectionStart) {
    textfield.textContent = `${textarea.textContent.slice(
      0,
      textarea.selectionStart,
    )}\n${textarea.textContent.slice(textarea.selectionStart)}`;
  } else {
    textfield.textContent += '\n';
  }
};

export const onDeleteClick = (textarea) => {
  const textfield = textarea;
  if (textarea.selectionStart !== textarea.selectionEnd) {
    textfield.textContent = textarea.textContent.slice(0, textarea.selectionStart)
      + textarea.textContent.slice(textarea.selectionEnd);
  } else if (textarea.selectionStart) {
    textfield.textContent = textarea.textContent.slice(0, textarea.selectionStart)
      + textarea.textContent.slice(textarea.selectionStart + 1);
  }
  const end = textarea.value.length;
  textarea.setSelectionRange(end, end);
  textarea.focus();
};

export const onTabClick = (textarea) => {
  const textfield = textarea;
  if (textarea.selectionStart !== textarea.selectionEnd) {
    textfield.textContent = `${textarea.textContent.slice(
      0,
      textarea.selectionStart,
    )}  ${textarea.textContent.slice(textarea.selectionEnd)}`;
  } else if (textarea.selectionStart) {
    textfield.textContent = `${textarea.textContent.slice(
      0,
      textarea.selectionStart,
    )}  ${textarea.textContent.slice(textarea.selectionStart + 1)}`;
  } else {
    textfield.textContent += '   ';
  }
  const end = textarea.value.length;
  textarea.setSelectionRange(end, end);
  textarea.focus();
};

export const onCtrlClick = () => {
  isCtrlOn = true;
  if (isCtrlOn && isAltOn) {
    changeLanguage();
  }
};

export const onCtrlRelease = () => {
  isCtrlOn = false;
};

export const onAltClick = () => {
  isAltOn = true;
  if (isCtrlOn && isAltOn) {
    changeLanguage();
  }
};

export const onAltRelease = () => {
  isAltOn = false;
};
