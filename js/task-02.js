const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Get the ul#ingredients element by its ID
const ulElement = document.getElementById("ingredients");

// Create a document fragment to hold the <li> elements
const fragment = document.createDocumentFragment();

// Loop through the ingredients array and create <li> elements
ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.classList.add("item");
  fragment.appendChild(liElement); // Append the <li> to the fragment
});

// Append all the <li> elements to the ul#ingredients in a single operation
ulElement.appendChild(fragment);
