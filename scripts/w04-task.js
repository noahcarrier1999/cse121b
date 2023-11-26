/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Noah Carrier",
    photo: "images/noahCarrier.png",
    favoriteFoods: [
        "Pizza",
        "Wings",
        "Burritos",
        "Chicken",
        "Ice Cream"
    ],
    hobbies: [
        "Tennis",
        "Drawing",
        "Coding",
        "Projects",
        "3d Printing",
        "Ukelele"
    ],
    placesLived:[
        
    ]
    
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place:"Rexburg Idaho",
        length: "3 Years"
    },
    {
        place:"Boise Idaho",
        length: "1 year"
    },
    {
        place:"Henderson Kentucky",
        length: "5 Years"
    },
    {
        place:"Durham North Carolina",
        length: "2 Years"
    },
    {
        place:"Cherokee North Carolina",
        length: "1 Year"
    },
    {
        place:"Sioux Falls South Dakota",
        length: "2 Year"
    },
    {
        place:"Decatur Illinois",
        length: "7 Year"
    },
    {
        place:"Yuba City California",
        length: "5 months"
    },
    
    

)



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place =>{
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);

})

