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
    const type = garmentEl.querySelector('[name="garment-type[]"]').value;
    const size = garmentEl.querySelector('[name="garment-size[]"]').value;
    const color = garmentEl.querySelector('[name="garment-color[]"]').value;

    const fileInput = garmentEl.querySelector('[name="garment-image[]"]');
    const file = fileInput.files[0];

    garments.push({ type, size, color, file });
  });

  try {
    const workOrderData = { clientName, phone, address, city, zip, orderDate, dueDate, garments };

    // Upload work order data to FormSubmit
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

    // Generate and download PDF
    const pdfData = await generatePDF(workOrderData);
    downloadPDF(pdfData, 'work-order.pdf');

    // Show success message
    alert('Work order submitted successfully!');
  } catch (error) {
    console.error(error);
    alert('Error submitting work order. Please try again.');
  }
});
