// const categoriesElements = document.querySelectorAll(".item");
// console.log("Number of Categories:", categoriesElements.length);

// categoriesElements.forEach((el) => {
//   const categoryName = el.firstElementChild.textContent;
//   console.log("Category:", categoryName);

//   const categoryTypesList = el.lastElementChild;
//   const categoryTypesLenght = categoryTypesList.children.length;
//   console.log("Elements:", categoryTypesLenght);
// });

// Get the ul#categories element
const categoriesList = document.querySelector("#categories");

// Get all the li.item elements within ul#categories
const categoryItems = categoriesList.querySelectorAll("li.item");

// Display the number of categories
console.log("Number of categories: " + categoryItems.length);

// Loop through each category item and display header text and the number of elements
categoryItems.forEach((categoryItem) => {
  const categoryHeader = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("ul li").length;

  console.log("Category: " + categoryHeader);
  console.log("Elements: " + categoryElements);
});
