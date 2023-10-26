const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const inputLength = input.value.length;
  const expectedLength = parseInt(input.getAttribute("data-length"));

  if (inputLength === expectedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
