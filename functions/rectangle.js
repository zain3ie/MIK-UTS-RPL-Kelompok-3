function calculateArea(width, length) {
  let errorMessage = inputValidation(width, length);
  return errorMessage ? errorMessage : width * length;
}

function inputValidation(width, length) {
  let errorMessage = '';

  if (isNaN(width) || isNaN(length)) {
    if (isNaN(width)) {
      errorMessage = 'Silakan masukkan nilai lebar yang valid';
    } else {
      errorMessage = 'Silakan masukkan nilai panjang yang valid';
    }
  } else if (width <= 0 || length <= 0) {
    if (width <= 0 && length <= 0) {
      errorMessage = 'Masukkan terlebih dahulu nilai lebar dan panjang yang valid';
    } else if (width <= 0) {
      errorMessage = 'Silakan masukkan nilai lebar yang valid';
    } else {
      errorMessage = 'Silakan masukkan nilai panjang yang valid';
    }
  }

  return errorMessage;
}

module.exports = { calculateArea, inputValidation };
