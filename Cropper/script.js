document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const croppedImageContainer = document.getElementById('croppedImageContainer');
    let cropper;

    fileInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            const img = new Image();
            img.src = event.target.result;

            img.onload = function () {
                if (cropper) {
                    cropper.replace(img.src);
                } else {
                    cropper = new Cropper(img, {
                        aspectRatio: 1 / 1,
                        crop(event) {
                            console.log('Cropping event:', event);
                            const canvas = cropper.getCroppedCanvas();
                            const croppedImage = canvas.toDataURL('image/jpeg');
                            croppedImageContainer.innerHTML = `<img src="${croppedImage}" alt="Cropped Image">`;

                            // Save cropped image to MongoDB (not implemented)
                            saveToDatabase(croppedImage);
                        }
                    });
                }
            };
        };

        reader.readAsDataURL(file);
    });
});

function saveToDatabase(imageData) {
    // Code to save imageData to MongoDB
    console.log('Image saved to database:', imageData);
}
