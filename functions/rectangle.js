function calculateArea(width, length) {
  let errorMessage = inputValidation(width, length);
  return errorMessage ? errorMessage : width * length;
}

function inputValidation(width, length) {
  let invalidBoth = 'Silakan masukkan nilai lebar dan panjang yang valid';
  let invalidWidth = 'Silakan masukkan nilai lebar yang valid';
  let invalidLength = 'Silakan masukkan nilai panjang yang valid';

  if (isNaN(width) || isNaN(length)) {
    return isNaN(width) && isNaN(length) ? invalidBoth : isNaN(width) ? invalidWidth : invalidLength;
  } else if (width <= 0 || length <= 0) {
    return width <= 0 && length <= 0 ? invalidBoth : width <= 0 ? invalidWidth : invalidLength;
  }
}

module.exports = { calculateArea, inputValidation };
