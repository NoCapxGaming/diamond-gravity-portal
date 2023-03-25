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

    <label for="garment-logo" data-en="Upload Logo:" data-es="Subir Logo:">Upload Logo:</label>
    <input type="file" id="garment-logo-${garmentCount}" name="garment-logo[]" accept="image/*">
  `;

  garmentContainer.appendChild(garmentEl);
});

const workOrderForm = document.getElementById('work-order-form');
workOrderForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const clientName = document.getElementById('client-name').value;
  const phone = document.getElementById('client-phone').value;
  const address = document.getElementById('client-address').value;
  const city = document.getElementById('client-city').value;
  const zip = document.getElementById('client-zip').value;
  const orderDate = document.getElementById('order-date').value;
  const dueDate = document.getElementById('due-date').value;
  const garments = [];

  document.querySelectorAll('.garment').forEach((garmentEl) => {
    const type = garmentEl.querySelector(`#garment-type-${garmentCount}`).value;
    const size = garmentEl.querySelector(`#garment-size-${garmentCount}`).value;
    const color = garmentEl.querySelector(`#garment-color-${garmentCount}`).value;
    const logo = garmentEl.querySelector(`#garment-logo-${garmentCount}`).files[0];

    garments.push({
      type,
      size,
      color,
      logo
    });
  });

  const workOrderData = {
    clientName,
    phone,
    address,
    city,
    zip,
    orderDate,
    dueDate,
    garments
  };

  try {
    const response = await fetch('https://formsubmit.co/diamondgravity.tech@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workOrderData)
    });

    if (!response.ok) {
      throw new Error('Error submitting work order.');
    }

    // Show success message
    alert('Work order submitted successfully!');
  } catch (error) {
    console.error(error);
    alert('Error submitting work order. Please try again.');
  }
});
