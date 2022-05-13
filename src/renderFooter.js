const renderFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const systemInfo = document.createElement('p');
  systemInfo.classList.add('system-info');
  systemInfo.textContent = 'Created for Windows';
  const changeLanguageInfo = document.createElement('p');
  changeLanguageInfo.classList.add('change-language-info');
  changeLanguageInfo.textContent = "For switching keyboard layout press CTRL+ALT on physical keyboard or key 'ru'/'en' on virtual keyboard";
  footer.appendChild(systemInfo);
  footer.appendChild(changeLanguageInfo);
  document.body.appendChild(footer);
};

export default renderFooter;
