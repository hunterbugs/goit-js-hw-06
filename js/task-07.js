// Get references to the input and span elements
const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

// Add an event listener to the input element
fontSizeControl.addEventListener("input", function () {
  // Update the font size of the span element based on the input value
  textSpan.style.fontSize = fontSizeControl.value + "px";
});
