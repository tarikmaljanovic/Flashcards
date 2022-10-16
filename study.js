const select = document.querySelector("#decks");
const shuffle = document.querySelector(".shuffle");
const currentDeck = document.querySelector(".current-deck");
const card = document.querySelector(".card");
const cardFront = document.querySelector(".front");
const cardBack = document.querySelector(".back");

for(let i = 0; i < localStorage.length; i++)  {
  let key = localStorage.key(i);

  select.options.add(new Option(key));
}

function shuffleArray(array) {
  for(let i = array.length-1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  return array;
}


shuffle.addEventListener('click', function() {
  let studyDeck = shuffleArray(JSON.parse(localStorage.getItem(select.value)));

  let card = studyDeck[0];
  cardFront.innerHTML = String(Object.keys(card));
  cardBack.innerHTML = String(Object.values(card));
});

