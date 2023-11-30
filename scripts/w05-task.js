/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templeElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples)=>{
    templeElement.innerHTML = '';

    temples.forEach((temple)=>{
        let article = document.createElement("article");

        let h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        let templeImg = document.createElement("img");
        templeImg.src = temple.imageUrl;
        templeImg.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(templeImg);
        templeElement.appendChild(article);

    });
};



/* async getTemples Function using fetch()*/

const getTemples = async() =>{

    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    data = await response.json();

    templeList = data

    displayTemples(templeList);
};


/* reset Function */
const reset = () =>{
    
    templeElement.innerHTML = '';

};

/* sortBy Function */
const sortBy = (temples) =>{

    reset();

    let filter = document.querySelector('#sortBy').value;

    switch (filter) {
        case "utah":
            console.log("Filtering for Utah...");
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah')));
            break;
        case "notutah":
            console.log("Filtering for non-Utah...");
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes('utah')));
            break;
        case "older":
            console.log("Filtering for temples older than 1950...");
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            console.log("Displaying all temples...");
            displayTemples(temples);
            break;
        default:
            console.log("Invalid filter option...");
            displayTemples(temples);
            break;
    }

}





/* Event Listener */
let sortByElement = document.querySelector('#sortBy');

sortByElement.addEventListener('change', () =>{
    sortBy(templeList);
});


getTemples();