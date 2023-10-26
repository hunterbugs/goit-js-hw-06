// Get the form element
const loginForm = document.querySelector(".login-form");

// Add a submit event listener to the form
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the page from reloading

  // Get the email and password input fields
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // Check if any of the fields is empty
  if (!emailInput.value || !passwordInput.value) {
    alert("All fields must be filled in.");
    return;
  }

  // Create an object to store the form data
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  // Display the object with the entered data in the console
  console.log(formData);

  // Clear the values of the form fields using the reset method
  loginForm.reset();
});
