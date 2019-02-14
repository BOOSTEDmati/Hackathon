let hitxt = document.getElementById('hit');
let txt1 = "";
let hit = 0;

const cards = document.querySelectorAll(".memory-card");


var c = 0;
var a = 0;

let hasFlippedCard = false;
let lockboard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockboard) return;
  if (this === firstCard) return;


  this.classList.add("flip");

  if (!hasFlippedCard) {
    // 1st click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

    //second click
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();

}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  hit++;
  txt1 = hit;
  hitxt.innerHTML = "Score: " + txt1;



  resetboard();
}

function unflipCards() {
  lockboard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetboard();
  }, 1500);
}

function resetboard() {
  [hasFlippedCard, lockboard] = [false, false];
  [firstCard, secondCard] = [null, null];
        a = a + 1;
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12)
    card.style.order = randomPos;
  });
})();

function timer001() {
  c = c + 1;
  if (c > 0) {
    time001.innerHTML = c;
  }


  	if (c < 1) {
      window.clearInterval(update);
    }
    if    (Hits = 6)
    {
      return;
    }

}

// function scoreboard() {
// if (isMatch = true) {
//  score001.innerHTML = a;
//   }
//
// }
//
//   update = setInterval("scoreboard()", 1000);

update = setInterval("timer001()", 1000);

cards.forEach(card => card.addEventListener("click", flipCard));
