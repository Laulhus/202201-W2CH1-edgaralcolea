function strictEquals(a, b) {
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
});
