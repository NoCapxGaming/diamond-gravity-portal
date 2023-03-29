const addGarmentBtn = document.getElementById('add-garment');
const garmentContainer = document.getElementById('garment-container');
let garmentCount = 1;

addGarmentBtn.addEventListener('click', (e) => {
  e.preventDefault();

  garmentCount++;

  const garmentEl = document.createElement('div');
  garmentEl.classList.add('garment');

  garmentEl.innerHTML = `
  <div id="garment-container">
    <div class="form-section">
      <h3 data-en="Garment Info" data-es="Información de Prenda">Garment Info</h3>
      <div class="form-column">
        <label for="garment-type" data-en="Garment Type:" data-es="Tipo de Prenda:">Garment Type:</label>
        <input type="text" id="garment-type" name="garment-type[]" required>

        <label for="garment-size" data-en="Size:" data-es="Talla:">Size:</label>
        <input type="text" id="garment-size" name="garment-size[]" required>

        <label for="garment-color" data-en="Color:" data-es="Color:">Color:</label>
        <input type="text" id="garment-color" name="garment-color[]" required>
      </div>
      <div class="form-column">
        <label for="garment-logo" data-en="Logo: *Name of Image Uploaded*" data-es="Logo: *Nombre de la Imagen Subida*">Logo: *Name of Image Uploaded*</label>
        <input type="text" id="garment-logo" name="garment-color[]" required>
      </div>
    </div>
  </div>
  `;


  garmentContainer.appendChild(garmentEl);

  uploadcare.registerTab('preview', uploadcareTabEffects)

  UPLOADCARE_LOCALE_TRANSLATIONS = {
    buttons: {
      choose: {
        files: {
            other: 'UPLOAD LOGO'
        }
      }
    }
  }
});
