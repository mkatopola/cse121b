/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Moffat Katopola",
    photo: "images/image_moffat.png",
    favoriteFoods: [
        "Nsima",
        "Rice",
        "Chips",
        "Nkhwani",
        "Grilled Fish",
        "Chicken",
    ],
    hobbies: [
        "Watching movies",
        "Listening to music",
        "Traveling",
        "Site seeing",
    ],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Nancholi, Blantyre",
        length: "9 years",
    },

    {
        place: "Area 33, Lilongwe",
        length: "4 years",
    },

    {
        place: "Liwonde, Machinga",
        length: "1 month",
    },

    {
        place: "Ndalama, Thyolo",
        length: "1 month",
    },

    {
        place: "Sadzi, Zomba",
        length: "1 month",
    },

);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;


/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(area => {
    let dt = document.createElement("dt");
    dt.textContent = area.place;

    let dd = document.createElement("dd");
    dd.textContent = area.length;

    // Append the dt and dd elements to the dl element
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
});

