const addGarmentBtn = document.getElementById('add-garment');
const garmentContainer = document.getElementById('garment-container');
let garmentCount = 1;

addGarmentBtn.addEventListener('click', (e) => {
  e.preventDefault();

  garmentCount++;

  const garmentEl = document.createElement('div');
  garmentEl.classList.add('garment');

  garmentEl.innerHTML = `
    <h3 data-en="Garment ${garmentCount}" data-es="Prenda ${garmentCount}">Garment ${garmentCount}</h3>
    <label for="garment-type" data-en="Garment Type:" data-es="Tipo de Prenda:">Garment Type:</label>
    <input type="text" id="garment-type-${garmentCount}" name="garment-type[]" required>

    <label for="garment-size" data-en="Size:" data-es="Talla:">Size:</label>
    <input type="text" id="garment-size-${garmentCount}" name="garment-size[]" required>

    <label for="garment-color" data-en="Color:" data-es="Color:">Color:</label>
    <input type="text" id="garment-color-${garmentCount}" name="garment-color[]" required>

    <label for="garment-logo" data-en="Logo:" data-es="Logo:">Logo:</label>
    <input type="text" id="garment-logo" name="garment-color[]" required>

  `;

  garmentContainer.appendChild(garmentEl);
});
