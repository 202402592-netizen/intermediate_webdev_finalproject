const {
  calculateSimpleInterest,
  calculateTotalPayableAmount,
} = require("../src/script.js");

describe("Interest Rate Calculator Tests", () => {
  it("calculates simple interest", () => {
    expect(calculateSimpleInterest(1000, 5, 1)).toBe(50);
  });

  it("calculates the total payable amount", () => {
    expect(calculateTotalPayableAmount(1000, 50)).toBe(1050);
  });
});
