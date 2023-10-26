// Get references to the input and span elements
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Add an event listener for the input event
nameInput.addEventListener("input", function () {
  // Get the current value of the input field
  const inputValue = nameInput.value;

  // Update the span content with the input value or "Anonymous" if empty
  nameOutput.textContent = inputValue || "Anonymous";
});
