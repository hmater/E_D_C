

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
function shuffleObject(obj) {
  const keys = Object.keys(obj);

  for (let i = keys.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [keys[i], keys[j]] = [keys[j], keys[i]];
  }

  const shuffledObject = {};
  keys.forEach(key => {
    shuffledObject[key] = obj[key];
  });

  return shuffledObject;
}

function generar_divs(list1, list2){
  //const list = ['centro-historico.jpg','ex-senado.jpg','fondo.jpg','isla-de-pascua.jpg','La_Moneda.jpg','tribunales.jpg','centro-historico.jpg','ex-senado.jpg','fondo.jpg','isla-de-pascua.jpg','La_Moneda.jpg','tribunales.jpg'];
  //shuffle(list);
  //shuffleObject(list)
  const section = document.querySelector("section");

  var back_img = "back";

  /*
  list.forEach(element => {
      div = document.createElement('div');
      div.classList.add('memory-card');
      div.dataset.valor = element;

      front = document.createElement('img');
      front.classList.add('front-face');
      front.src = "game_imgs/"+element;
      front.alt = element;
      div.append(front);

      back = document.createElement('img');
      back.classList.add('back-face');

      back.src = "img/"+back_img+".png";
      back.alt = element;
      div.append(back);
      section.append(div);
  });*/



    for (const key in list1) {
      if (list1.hasOwnProperty(key)) {
        //console.log(`${key}: ${obj[key]}`);
          div = document.createElement('div');
          div.classList.add('memory-card');
          div.dataset.valor = key;
          /*front*/
          front = document.createElement('p');
          front.classList.add('front-txt');
          front.innerText = key;
          div.append(front);
          /*back*/
          back = document.createElement('img');
          back.classList.add('back-face');
          back.src = "img/"+back_img+".jpg";
          div.append(back);
          section.append(div);
      }
    }
    for (const key in list2) {
      if (list2.hasOwnProperty(key)) {
        //console.log(`${key}: ${obj[key]}`);
          div = document.createElement('div');
          div.classList.add('memory-card');
          div.dataset.valor = key;
          /*front*/
          front = document.createElement('p');
          front.classList.add('front-txt');
          front.innerText = list2[key];
          div.append(front);
          /*back*/
          back = document.createElement('img');
          back.classList.add('back-face');
          back.src = "img/"+back_img+".jpg";
          div.append(back);
          section.append(div);
      }
    }
  
  

}

//generar_divs()


function start_engine(){

const cards = document.querySelectorAll('.memory-card');

var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.valor === secondCard.dataset.valor;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 2000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


function checkFlip() {
    const cards = document.querySelectorAll('.memory-card');
    
    const interval = setInterval(() => {
      let allFlipped = true;
      
      cards.forEach(card => {
        if (!card.classList.contains('flip')) {
          allFlipped = false;
          return;
        }
      });
      
      if (allFlipped) {
        clearInterval(interval);
        const winner = document.querySelector(".winner");
        winner.style.display = "block";
        const section = document.querySelector("section");
        section.classList.add("bounce")
        showScore(10,10,2)
      }
    }, 1000);
  }
checkFlip();
}



function swapKeysAndValues(obj) {
  const swappedObject = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      swappedObject[key] = key;
    }
  }

  return swappedObject;
}

function createNewObject(obj) {
  const keys = Object.keys(obj).slice(0, 6);
  const newObj = {};

  keys.forEach(key => {
    newObj[key] = obj[key];
  });

  return newObj;
}

function combineObjects(obj1, obj2) {
  const combinedObject = { ...obj1, ...obj2 };
  return combinedObject;
}

function duplicate_list(obj){
  const new_ = {...obj };
  return new_;
}
//start_engine()

/*
var url = "game_imgs/";
      $.get(url, (data) => { 
        //e_data = data;
        lista = data.match(/href="([\w.]+)/g).map((x) => x.replace('href="', ''));


        //console.log(list)

        shuffle(lista);

        list = lista.slice(0, 6);
        list=list.flatMap(i => [i,i]);

        generar_divs()
        start_engine()


      })*/

shuffleObject(list);
new_list = createNewObject(list);
new_copy = duplicate_list(new_list);
new_copy = swapKeysAndValues(new_copy);
//list = combineObjects(new_copy, new_list);
shuffleObject(new_copy);
shuffleObject(new_list);

generar_divs(new_copy,new_list)
start_engine()