const select = document.querySelector("#decks");
const shuffle = document.querySelector(".shuffle");
const currentDeck = document.querySelector(".current-deck");
const card = document.querySelector(".card");
const front = document.querySelector(".front");
const back = document.querySelector(".back");

for(let i = 0; i < localStorage.length; i++)  {
  let key = localStorage.key(i);

  select.options.add(new Option(key));
}

shuffle.addEventListener('click', function(event) {

});

