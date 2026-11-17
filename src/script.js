if (typeof document !== "undefined") {
  require("./style.css");
}

const calculateSimpleInterest = (principal, rate, time) =>
  (principal * rate * time) / 100;

const calculateTotalPayableAmount = (principal, interestAmount) =>
  principal + interestAmount;

const formatCurrency = (value) => Number(value).toFixed(2);

const calculate = () => {
  const principalInput = document.getElementById("principal");
  const rateInput = document.getElementById("rate");
  const timeInput = document.getElementById("time");
  const result = document.getElementById("result");

  const principal = Number(principalInput.value);
  const rate = Number(rateInput.value);
  const time = Number(timeInput.value);

  if (![principal, rate, time].every(Number.isFinite) || principal < 0 || rate < 0 || time < 0) {
    result.textContent = "Please enter valid non-negative numbers in every field.";
    return;
  }

  const simpleInterest = calculateSimpleInterest(principal, rate, time);
  const amount = calculateTotalPayableAmount(principal, simpleInterest);

  result.innerHTML = `<div>Principal Amount: <span>${formatCurrency(principal)}</span></div>
    <div>Total Interest: <span>${formatCurrency(simpleInterest)}</span></div>
    <div>Total Amount: <span>${formatCurrency(amount)}</span></div>`;
};

if (typeof document !== "undefined") {
  document.getElementById("interest-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    calculate();
  });
}

if (typeof window !== "undefined") {
  window.calculate = calculate;
}

if (typeof module !== "undefined") {
  module.exports = {
    calculateSimpleInterest,
    calculateTotalPayableAmount,
  };
}
