const decksCont = document.querySelector('.decks-cont');
const createDeck = document.querySelector('.create-deck');
const popup = document.querySelectorAll('.popup');
const formCloseBttn = document.querySelectorAll('.close-bttn');
const formEnterBttn = document.querySelectorAll('#enter-button');
const question = document.querySelector('#question');
const answer = document.querySelector('#answer');
const nameDeck = document.querySelector('#deck-title');


createDeck.addEventListener('click', function(event) {
  popup[1].className = 'popup-active';

  formCloseBttn[1].onclick = () => {popup[1].className = 'popup';}

  formEnterBttn[1].onclick = () => {
    if(nameDeck.value != '' && (nameDeck.value in localStorage) == false) {
      localStorage[nameDeck.value] = '';
      popup[1].className = 'popup';
    } else {
      popup[1].className = 'popup';
    }
  }
});

for(let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(i);

  let deck = document.createElement('div');
  deck.className = 'deck';

  let addCard = document.createElement('div');
  addCard.className = 'card-add';

  addCard.addEventListener('click', function(event) {
    let card = document.createElement('div');
    card.classaName = 'card';

    popup[0].className = 'popup-active';

    formCloseBttn[0].onclick = () => {popup[0].className = 'popup';}
    formEnterBttn[0].onclick = () => {
      if(question.value != '' && answer.value != '') {
        if(localStorage[key] == '') {
          let array = new Array();
          let q = question.value;
          let a = answer.value;
          let obj = {
            [q]: a
          }
          array.push(obj);

          localStorage[key] = JSON.stringify(array);
          popup[0].className = 'popup';
        } else {
          let array = JSON.parse(localStorage[key]);
          let q = question.value;
          let a = answer.value;
          let obj = {
            [q]: a
          };
          array.push(obj);
          localStorage[key] = JSON.stringify(array);
          popup[0].className = 'popup';
        }
    }
  }
});

  let deckTitle = document.createElement('h1');
  deckTitle.className = 'deck-title';
  deckTitle.innerHTML = `${key}`;

  let icon = document.createElement('i');
  icon.className = 'fa-solid fa-plus';
  
  let header = document.createElement('div');
  header.className = 'header';

  let delIcon = document.createElement('i');
  delIcon.className = 'fa-solid fa-trash';
  delIcon.onclick = () => {
    localStorage.removeItem(key);
  }
  
  header.append(deckTitle);
  header.append(delIcon);
  decksCont.append(header);
  deck.append(addCard);
  addCard.append(icon);
  decksCont.append(deck);
}

for(let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const existingDecks = document.querySelectorAll('.deck');
  const arrayOfCards = JSON.parse(localStorage[key]);

  
  
  for(let obj of arrayOfCards) {
    for(let objKey in obj) {
      let card = document.createElement('div');
      card.className = 'card';
  
      let cardText = document.createElement('p');
      cardText.innerHTML = `${objKey}`;
  
      let uiCont = document.createElement('div');
      uiCont.className = 'ui-cont';
      card.append(uiCont);
  
      let delIcon = document.createElement('i');
      delIcon.classList = 'fa-solid fa-trash';
  
      let editIcon = document.createElement('i');
      editIcon.className = 'fa-regular fa-pen-to-square';
  
      card.prepend(cardText)
      uiCont.append(delIcon);
      uiCont.append(editIcon);
  
      existingDecks[i].prepend(card);

      delIcon.onclick = () => {
        arrayOfCards.pop(obj);

        localStorage[key] = JSON.stringify(arrayOfCards);
      }

      editIcon.onclick = () => {
        const editQuestion = document.querySelector('#edit-question');
        const editAnswer = document.querySelector('#edit-answer');
        editQuestion.value = `${objKey}`;
        editAnswer.value = `${obj[objKey]}`;

        popup[2].className = 'popup-active';

        formCloseBttn[2].onclick = () => {
          popup[2].className = 'popup';
        }

        formEnterBttn[2].onclick = () => {
          obj[editQuestion.value] = editAnswer.value;
          delete obj[objKey];

          localStorage[key] = JSON.stringify(arrayOfCards);
          popup[2].className = 'popup';
        }
      }
    }
  }
}

    
  