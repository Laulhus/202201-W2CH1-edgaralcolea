const { number } = require("yargs");
function strictEquals(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  } else if (Object.is(a, 0) || Object.is(b, 0)) {
    return true;
  }
  return Object.is(a, b);
}

describe("Given a strictEquals function", () => {
  describe("When it receives 1 and 1", () => {
    test("Then it should return true", () => {
      // Arrange
      const firstValue = 1;
      const secondValue = 1;
      const expectedResult = true;

      // Act
      const result = strictEquals(firstValue, secondValue);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
  describe("When it receives NaN and NaN", () => {
    test("Then it should return false", () => {
      // Arrange
      const firstValue = NaN;
      const secondValue = NaN;
      const expectedResult = false;

      // Act
      const result = strictEquals(firstValue, secondValue);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
  describe("When it receives 0 and -0", () => {
    test("Then it should return true", () => {
      // Arrange
      const firstValue = 0;
      const secondValue = -0;
      const expectedResult = true;

      // Act
      const result = strictEquals(firstValue, secondValue);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
  describe("When it receives -0 and 0", () => {
    test("Then it should return true", () => {
      // Arrange
      const firstValue = -0;
      const secondValue = 0;
      const expectedResult = true;

      // Act
      const result = strictEquals(firstValue, secondValue);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
  describe("When it receives 1 and '1'", () => {
    test("Then it should return false", () => {
      // Arrange
      const firstValue = 1;
      const secondValue = "1";
      const expectedResult = false;

      // Act
      const result = strictEquals(firstValue, secondValue);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
  describe("When it receives true and false", () => {
    test("Then it should return false", () => {
      // Arrange
      const firstValue = true;
      const secondValue = false;
      const expectedResult = false;

      // Act
      const result = strictEquals(firstValue, secondValue);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
  describe("When it receives false and false", () => {
    test("Then it should return true", () => {
      // Arrange
      const firstValue = false;
      const secondValue = false;
      const expectedResult = true;

      // Act
      const result = strictEquals(firstValue, secondValue);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
  describe("When it receives 'Water' and 'oil'", () => {
    test("Then it should return false", () => {
      // Arrange
      const firstValue = "Water";
      const secondValue = "oil";
      const expectedResult = false;

      // Act
      const result = strictEquals(firstValue, secondValue);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
});
