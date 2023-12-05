
console.log("hello");
let rock_element = document.querySelector("#Rock");
let paper_element = document.querySelector('#Paper');
let scissors_element = document.querySelector('#Scissors');
let result_element = document.querySelector('#results');
let icons = document.querySelector('#icons');
let directions = document.querySelector('#directions');


//Function that gets the computers choice
function computersChoice(){
 let choices = ['Rock','Paper','Scissors'];
 var randomNum = Math.floor(Math.random()*3);
 return choices[randomNum];
};

//The computers choice
 let cChoice = computersChoice();
 console.log(cChoice);

//Checks for a button click by the user
 

//Changes the choice upon the button pressed
 function userChoice(event){
    let uChoice = '';
    if(event.target === rock_element){
        uChoice = 'Rock';
    }
    else if (event.target === paper_element){
        uChoice = 'Paper';
    }
    else if (event.target === scissors_element){
        uChoice = "Scissors";
    }
    console.log("Users Choice: ",uChoice);
    return uChoice;
 }


 //Checks for the user to press one of the buttons
 rock_element.addEventListener("click", () => {
    let uChoice = userChoice(event);
    gameLogic(uChoice);
  });
  
  paper_element.addEventListener("click", () => {
    let uChoice = userChoice(event);
    gameLogic(uChoice);
  });
  
  scissors_element.addEventListener("click", () => {
    let uChoice = userChoice(event);
    gameLogic(uChoice);
  });


 
 function gameLogic(uChoice){
    let cChoice = computersChoice();
    let resultText = 'Begin';
    switch(uChoice){
        case "Rock":
            if (cChoice == "Paper"){
                resultText = "<p> You Lose sorry the Computer chose 📜 </p>";
                document.body.style.backgroundColor = "crimson";
            }
            else if (cChoice == "Scissors"){
                resultText = "<p> You Win!!! The Computer chose ✂️ </p>";
                document.body.style.backgroundColor = "green";
            }
            else
            {
                resultText = "<p> It is a tie </p>";
                document.body.style.backgroundColor = "grey";
            }
            break;
    
        case "Paper":
            if (cChoice == "Paper"){
                resultText ="<p> It is a tie </p>";
                document.body.style.backgroundColor = "grey";
            }
            else if (cChoice == "Scissors"){
                resultText ="<p> You Lose sorry the Computer chose ✂️ </p>";
                document.body.style.backgroundColor = "crimson";
            }
            else
            {
                resultText ="<p> You Win!!! The Computer chose 🪨 </p>";
                document.body.style.backgroundColor = "green";
            }
            break;
    
        case "Scissors":
            if (cChoice == "Paper"){
                resultText ="<p> You Win!!! The Computer chose 📜 </p>";
                document.body.style.backgroundColor = "green";
            }
            else if (cChoice == "Scissors"){
                resultText ="<p> It is a tie </p>";
                document.body.style.backgroundColor = "grey";
            }
            else
            {
                resultText ="<p> You Lose sorry the Computer chose 🪨 </p>";
                document.body.style.backgroundColor = "crimson";
            }
            break;
    } 

    result_element.innerHTML = resultText;
 }  
  
const accessKey = "01-kv9_YzZyxAcLlVqqV3EqOhsqKuGXUoopt1ZBugwU";
const searchTerm = 'happy';
const apiUrl = "https://api.unsplash.com/photos/random?query=fight&client_id=01-kv9_YzZyxAcLlVqqV3EqOhsqKuGXUoopt1ZBugwU";



async function getImage(){
    const response = await fetch(apiUrl);

    if (response.ok){
        const data = await response.json();
        doStuff(data);
    }

    
}
 
function doStuff(data){
    result = data;
    const imageUrl = data.urls.regular;
    const imageDiv = document.createElement('div');
    imageDiv.id = "imageContainer";
    const image = document.createElement('img');

    imageDiv.appendChild(image);
    image.src = imageUrl
    document.body.appendChild(imageDiv);
}

 getImage(apiUrl);