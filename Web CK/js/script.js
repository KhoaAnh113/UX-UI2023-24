// JavaScript function to display the selected image
function displayImage(input) {
    var preview = document.getElementById('previewImage');
    var fileInput = document.getElementById('imageInput');
    var file = input.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function(e) {
        preview.src = e.target.result;
      };

      reader.readAsDataURL(file);

      // Reset the value of the file input to clear the displayed filename
      fileInput.value = "";
    }
  }
