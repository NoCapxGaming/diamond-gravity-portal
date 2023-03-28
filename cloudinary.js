const cloudinary = require('cloudinary').v2;

// Set up Cloudinary configuration
cloudinary.config({
  cloud_name: 'dou2suqxt',
  api_key: '498339597256129',
  api_secret: 'nXN_XuXoLWbQKU_9LUe6ngepHr4'
});

// Get file input element
const fileInput = document.getElementById('logo-image');

// Set up event listener for file input element
fileInput.addEventListener('change', async () => {
  // Get file object from file input element
  const file = fileInput.files[0];

  try {
    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(file, {
      folder: 'diamondgravity' // Optional: specify a folder to store the image
    });

    // Log Cloudinary response
    console.log(result);

    // Display image preview
    const imgPreview = document.getElementById('garment-image-preview-1');
    imgPreview.src = result.secure_url;
  } catch (err) {
    // Handle error
    console.error(err);
  }
});
