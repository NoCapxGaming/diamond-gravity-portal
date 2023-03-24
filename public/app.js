const toggleLanguageBtn = document.getElementById('toggle-language');
const formLabels = document.querySelectorAll('label, h1, h2, h3, button');

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


const addGarmentBtn = document.getElementById('add-garment');
const garmentContainer = document.getElementById('garment-container');
let garmentCount = 1;

addGarmentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  garmentCount++;
  const newGarment = document.createElement('div');
  newGarment.classList.add('garment');
  newGarment.innerHTML = `
    <h3 data-en="Garment ${garmentCount}" data-es="Prenda ${garmentCount}">Garment ${garmentCount}</h3>
    <label for="garment-type" data-en="Garment Type:" data-es="Tipo de Prenda:">Garment Type:</label>
    <input type="text" id="garment-type" name="garment-type[]" required>

    <label for="garment-size" data-en="Size:" data-es="Talla:">Size:</label>
    <input type="text" id="garment-size" name="garment-size[]" required>

    <label for="garment-color" data-en="Color:" data-es="Color:">Color:</label>
    <input type="text" id="garment-color" name="garment-color[]" required>

    <label for="garment-logo" data-en="Desired Logo:" data-es="Logo Deseado:">Desired Logo:</label>
    <input type="text" id="garment-logo" name="garment-logo[]" required>
  `;
  garmentContainer.appendChild(newGarment);
  updateLanguage();
});

const workOrderForm = document.getElementById('work-order-form');
workOrderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Process the form data and generate the PDF
});
