const cloudName = 'YOUR_CLOUD_NAME';
const uploadPreset = 'YOUR_UPLOAD_PRESET';
const uploadFolder = 'YOUR_UPLOAD_FOLDER';

// Create a new instance of the upload widget with the cloudinary settings
const myWidget = cloudinary.createUploadWidget({
  cloudName: 'dou2suqxt',
  uploadPreset: 'dgworkorders',
  uploadFolder: 'DGWORKORDERS'
}, (error, result) => {
  if (!error && result && result.event === "success") {
    console.log('Done! Here is the image info: ', result.info);
    const imagePreview = document.getElementById('preview');
    imagePreview.src = result.info.secure_url;
    imagePreview.style.display = 'block';
  }
});

// Open the widget when the user clicks on the label
document.querySelector('.file-upload label').addEventListener('click', () => {
  myWidget.open();
});
