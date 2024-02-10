/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templesList = [];

/* async displayTemples Function */
const displayTemples = (templesList) => {

    templesList.forEach(temple => {
        // Creating HTML <article> element
        const articleElement = document.createElement("article");

        // creating <h3> element and adding templeName property
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;

        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        // Appending the <h3> element and the <img> element to the <article> element as children
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Appending the <article> element to the global templesElement variable
        templesElement.appendChild(articleElement);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templesList = await response.json();

    displayTemples(templesList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
};


/* filterTemples Function */
const filterTemples = (temples) => {
    // clearing the templesList
    reset();

    // filter value
    let filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            // filter temples if they have "Utah" in their templeName property
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;

        case "notutah":
            // filter temples if they don't have "Utah" in their templeName property
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;

        case "older":
            // filter temples if their dedicated property is older than 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case "all":
            // Display all the temples
            displayTemples(temples);
            break;

        case "alpha":
            // Sort the temples by their templeName property in ascending order
            let sortedTemples = temples.sort((a, b) => a.templeName.localeCompare(b.templeName));
            // Display the sorted temples
            displayTemples(sortedTemples);
            break;
    }
}

getTemples();

/* Event Listener */
// Adding an event listener to "filtered" that calls filterTemples on change
document.getElementById("filtered").addEventListener("change", () =>
    filterTemples(templesList));

// Adding a new option element to the HTML select element
let selectElement = document.getElementById("filtered");
let optionElement = document.createElement("option");
optionElement.value = "alpha";
optionElement.textContent = "Alphabetical Order";
selectElement.appendChild(optionElement);
