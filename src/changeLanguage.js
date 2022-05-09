import renderKeyboard from "./renderKeyboard";

function toggleLang() {
  if (localStorage.getItem("lang") === "en") {
    localStorage.setItem("lang", "ru");
  } else {
    localStorage.setItem("lang", "en");
  }
}

const changeLanguage = () => {
  toggleLang();
  const main = document.querySelector(".main");
  main.remove();
  renderKeyboard();
};

export default changeLanguage;
