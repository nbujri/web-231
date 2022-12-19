// ====================================================================
//     ; Title: Assignment 9.2
//     ; Author: Ngi Bujri
//     ; Date: 12 December 2022
//     ; Description: demonstrate JS functions by building a card game
// ====================================================================

// CLASSES
class Card {
  constructor(face, suit) {
    this.face = face;
    this.suit = suit;
  }
}

class Dealer {
  constructor() {
    this.getDeckOfCards();
  }

  // number of cards in a deck
  cardCount = 52;
  // array to store cards
  cards = [];
  // card faces
  faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  // card suits
  suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

  // generate a deck of cards
  getDeckOfCards() {
    for (let count = 0; count < this.cardCount; count++) {
      this.cards[count] = new Card(
        this.faces[count % 13],
        this.suits[Math.floor(count / 13)]
      );
    }
  }

  // shuffle the deck of cards
  shuffle() {
    for (let firstCard = 0; firstCard < this.cardCount; firstCard++) {
      // get random card that will swap with tempCard
      let secondCard = Math.floor(Math.random() * this.cardCount);
      let tempCard = this.cards[firstCard];
      this.cards[firstCard] = this.cards[secondCard];
      secondCard = tempCard;
    }
  }

  // template to create card
  buildPlayingCard(card, suitIcon, faceColor, suitColor) {
    return `<div class="card player-card">
              <div class="card-title" style="
              text-align: left;
              font-size: 20px;
              padding-left: 10px;
              color: ${faceColor};
              ">
              ${card.face}
              </div>
              <div class="card-content style="
              font-size: 28px;
              padding-bottom: 25px;
              ">
                <span class="${suitIcon}" style="
                color: ${suitColor};
                ">
                </span>
              </div>
            </div>`;
  }
}

document.getElementById("btn-deal-cards").onclick = function () {
  let dealer = new Dealer();
  dealer.shuffle();
  let cardOutputWithIcon = "";

  for (const card of dealer.cards) {
    switch (card.suit) {
      case "Hearts":
        cardOutputWithIcon += dealer.buildPlayingCard(
          card,
          "mdi mdi-cards-heart",
          "red",
          "red"
        );
        break;
      case "Diamonds":
        cardOutputWithIcon += dealer.buildPlayingCard(
          card,
          "mdi mdi-cards-diamond",
          "red",
          "red"
        );
        break;
      case "Clubs":
        cardOutputWithIcon += dealer.buildPlayingCard(
          card,
          "mdi mdi-cards-club",
          "black",
          "black"
        );
        break;
      case "Spades":
        cardOutputWithIcon += dealer.buildPlayingCard(
          card,
          "mdi mdi-cards-spade",
          "black",
          "black"
        );
        break;
    }
  }

  // set HTML of player-card-container to display cards
  document.getElementById("player-card-container").innerHTML =
    cardOutputWithIcon;
};
