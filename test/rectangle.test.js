const {calculateArea} = require('../functions/rectangle')

describe('calculate rectangle area', () => {
  it('should calculate rectangle area for valid width and length', () => {
    const result = calculateArea(5, 10)
    expect(result).toBe(50)
  });

  it('should return error message "Silakan masukkan nilai lebar yang valid" for invalid width', () => {
    const result = calculateArea('a', 10)
    expect(result).toBe('Silakan masukkan nilai lebar yang valid')
  });

  it('should return error message "Silakan masukkan nilai panjang yang valid" for invalid length', () => {
    const result = calculateArea(5, -10)
    expect(result).toBe('Silakan masukkan nilai panjang yang valid')
  });
});
