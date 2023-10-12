//Modell

let pikachu = {
    name: "Pikachu",
    health: 45,
    image: "pikachu.png",
    level: 8,
  };
  
  let bulbasaur = {
    name: "Bulbasaur",
    health: 70,
    image: "bulbasaur.png",
    level: 12,
  };
  
  let oranguru = {
    name: "Oranguru",
    health: 170,
    image: "oranguru.png",
    level: 45,
  };
  
  let drowzee = {
    name: "Drowzee",
    health: 90,
    image: "drowzee.png",
    level: 33,
  };

  let player = {
    name: 'Bjarne',
    image: 'pokemonTrainerIdle.png',
    Pokemon: [],
  }
  
  
  let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
  let randomPokemon;
  let caughtPokemons = [];
  let app = document.getElementById("app");
  
  //View  
  updateView();
  function updateView() {
    getRandomPokemon();
    app.innerHTML = /*HTML*/ `
    <div class="container">
      <div class="opposingPokemon">
          <div>${randomPokemon.name} </div>
          <div>lvl: ${randomPokemon.level}</div>
          <img src="${randomPokemon.image}">
      </div>
      
      <div class="bottomScreen">
          <div class="player">
              <img src="${player.image}">
              <div>${player.name}</div>
          </div>
  
          <div class="buttonContainer">
              <button onclick="catchPokemon()">Fang</button>    
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>       
          </div>
  
      </div>    
    </div>  
    `;
  }  
  function ShowCaughtPokemonView(){
   let pokemonList = '';
   for(let i = 0; i < player.Pokemon.length; i++){
    pokemonList += ` <div>name:${caughtPokemons[i].name}<br> level: ${caughtPokemons[i].level}<br> health:${caughtPokemons[i].health}</div> <img src="${caughtPokemons[i].image}" alt="${caughtPokemons[i].name}">`;
   }
    app.innerHTML = /*HTML*/`
  <h1 style="position: absolute; top: 50px;">Dine pokemon</h1>
  <div class="showcaughtPokemon">${pokemonList}</div>
  
    `;
      }

  
  function caughtPokemonView() {
    app.innerHTML = /*HTML*/ `
    <div class="caughtContainer">
    <h1>Du fanget ${player.Pokemon[player.Pokemon.length - 1].name}</h1>
    <div class="buttonContainer">
    <button onclick="updateView()">Finn en annen</button>
    <button onclick="showPokemon()">Vis dine pokemon</button>       
    </div>
    </div>
    `;
  
  }  
  //Controller
  function catchPokemon() {
    player.Pokemon.push(randomPokemon);
    caughtPokemons.push(randomPokemon);
    caughtPokemonView();

  }  
  

  
  function getRandomPokemon() {
    let randomNum = Math.floor(Math.random() * possiblePokemon.length);
    randomPokemon = possiblePokemon[randomNum];
  }  



function showPokemon(){
ShowCaughtPokemonView();  
  }
  
  

