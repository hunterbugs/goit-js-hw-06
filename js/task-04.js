// Initialize the counterValue variable
let counterValue = 0;

// Get references to the elements
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.getElementById("value");

// Add event listeners to the buttons
decrementButton.addEventListener("click", () => {
  // Decrease the counter value by 1
  counterValue -= 1;
  // Update the value displayed on the interface
  valueElement.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  // Increase the counter value by 1
  counterValue += 1;
  // Update the value displayed on the interface
  valueElement.textContent = counterValue;
});
