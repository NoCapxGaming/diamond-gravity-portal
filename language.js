const toggleLanguageBtn = document.getElementById('toggle-language');
const formLabels = document.querySelectorAll('label, h1, h2, h3, button, footer');

let language = 'en';

toggleLanguageBtn.addEventListener('click', () => {
  if (language === 'en') {
    language = 'es';
  } else {
    language = 'en';
  }
  updateLanguage();
});

function updateLanguage() {
  formLabels.forEach((label) => {
    label.textContent = label.dataset[language];
  });
  toggleLanguageBtn.textContent = language === 'en' ? 'Español' : 'English';
}
