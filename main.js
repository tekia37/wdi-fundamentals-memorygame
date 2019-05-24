console.log("Up and running!");

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
   this.setAttribute('src');
   alert("You found a match!");
} else {
    alert("Sorry, try again.");
  }
}

function flipCard() {
  this.getAttribute('data-id');
  checkForMatch();
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
}

function createBoard() {
for (var i = 0; i < cards.length; i++) {
  var createCard = document.cardElement('img');
  cardElement.getAttribute('src', 'images/images/back.png');
  cardElement.setAttribute('data-id', i);
  cardElement.addEventListener(click, flipCard);
  node.appendChild(cardElement);
}
}
  createBoard();
  
  
