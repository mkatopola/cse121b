/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Moffat Katopola";
let currentYear = new Date().getFullYear();
let profilePicture = "images/image_moffat.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");

/* Step 4 - Adding Content */
let imageElement = document.getElementsByTagName("img")[0];

nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ["Nsima","Fish","Rice","Soup","Steak","Sauce"];
foodElement.innerHTML = favoriteFoods;

let fav = "Sandwich";
favoriteFoods.push(fav);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;




