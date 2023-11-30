const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

function doStuff(data) {
  results = data;
  const HTML = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="${results.name}">`;
  let output = document.querySelector("#output");
  output.innerHTML = HTML;

  console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);


async function getPokemonList(url){

    const response = await fetch(url);

    if (response.ok){

        const data = await response.json();
        doStuffList(data);
    }
    

}


function doStuffList(data){

    let results = data;
    let pokeList  = data.results;
    let outputList = document.querySelector("#outputList");

    pokeList.forEach((item)=>{
        const HTML = `<li>${item.name}</li>`;

        outputList.innerHTML += (HTML);
        });
        
    };


getPokemonList(url);
console.log(`Result 2: ${results}`);

getPokemonList(urlList);
