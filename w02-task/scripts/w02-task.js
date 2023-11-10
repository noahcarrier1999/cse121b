/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Noah Carrier";
let currentYear = "2023";
let profilePicture = "w02-task/images/noahCarrier.png";



/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Image of ${fullName}`);









/* Step 5 - Array */
let favoriteFood = ["Hot Wings", "Pizza", "Steak", "Chicken Sandwich", "Cheese Cake"]
foodElement.innerHTML = favoriteFood.join(',');

foodElement.innerHtml += `${favoriteFood}`;

newFoodItem = "Nuggets";

favoriteFood.push(newFoodItem);

favoriteFood.shift();

foodElement.innerHTML += `<br>${favoriteFood.join(', ')}`;

favoriteFood.pop();

foodElement.innerHTML += `<br>${favoriteFood.join(', ')}`;




