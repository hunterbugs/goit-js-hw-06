function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Function to change the background color and update the color value
function changeBackgroundColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector(".color").textContent = newColor;
}

// Add a click event listener to the "Change color" button
const changeColorButton = document.querySelector(".change-color");
changeColorButton.addEventListener("click", changeBackgroundColor);

// Initialize the background color
changeBackgroundColor();
