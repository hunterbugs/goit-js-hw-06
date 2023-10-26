function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  const boxesDiv = document.getElementById("boxes");
  boxesDiv.innerHTML = "";

  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);

    boxSize += 10;
  }
}

function destroyBoxes() {
  const boxesDiv = document.getElementById("boxes");
  boxesDiv.innerHTML = "";
}

document.getElementById("createButton").addEventListener("click", function () {
  const boxCountInput = document.getElementById("boxCountInput");
  const amount = parseInt(boxCountInput.value, 10);
  createBoxes(amount);
});

document
  .getElementById("destroyButton")
  .addEventListener("click", destroyBoxes);
