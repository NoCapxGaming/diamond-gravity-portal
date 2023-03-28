const form = document.querySelector('#work-order-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const file = formData.get('garment-image[]');

  const client_id = 'c35afde539ff77b';
  const headers = {
    Authorization: `Client-ID ${client_id}`
  };

  const imgurResponse = await uploadToImgur(file, headers);

  if (imgurResponse.success) {
    const imgurLink = imgurResponse.data.link;
    formData.set('garment-image[]', imgurLink);

    const formSubmitResponse = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (formSubmitResponse.ok) {
      // Form submission successful
    } else {
      // Form submission failed
    }
  } else {
    // Imgur upload failed
  }
});

async function uploadToImgur(file, headers) {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: headers,
    body: formData
  });

  const data = await response.json();
  return {
    success: response.ok,
    data: data.data
  };
}
