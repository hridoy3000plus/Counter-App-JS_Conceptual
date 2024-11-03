// Hoisting and TDZ
let counterApp;

// Constants in global scope
const MAX_COUNT = 10;
const MIN_COUNT = -10;

// Counter Module (Closure)
const createCounter = () => {
  // Private variables in function scope
  let count = 0;

  const updateDisplay = () => {
    document.getElementById("counterDisplay").textContent = count;
  };

  // Public interface
  return {
    increment() {
      if (count < MAX_COUNT) {
        count++;
        updateDisplay();
      }
    },
    decrement() {
      if (count > MIN_COUNT) {
        count--;
        updateDisplay();
      }
    },
    reset() {
      count = 0;
      updateDisplay();
    },
    getCount() {
      return count;
    },
  };
};

document.addEventListener("DOMContentLoaded", () => {
  counterApp = createCounter();

  // Counter event listeners
  document
    .getElementById("incrementBtn")
    .addEventListener("click", () => counterApp.increment());
  document
    .getElementById("decrementBtn")
    .addEventListener("click", () => counterApp.decrement());
  document
    .getElementById("resetBtn")
    .addEventListener("click", () => counterApp.reset());
});
