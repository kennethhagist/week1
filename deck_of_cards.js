// Deck of Cards

// Deck of objects
class Deck {
    constructor(){
        this.cards = [];
        this.suits = ['spades', 'clubs', 'hearts', 'diamonds'];
        this.values = ['Ace', 2,3,4,5,6,7,8,9,10,'Jack','Queen','King'];
        this.reset();
        //shuffle(this.cards);
    }

    // from: https://host.ocks.org/mike/shuffle/
    shuffle() {
        var m = this.cards.length, t, i;
        console.log("suffling..");
        // While there remain elements to shuffle...
        while (m) {

            // Pick a remaining element...
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element..
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
        console.log("done.");
        return;
    }
    // Deal a card, take from "top" of deck
    dealCard(){
        // Deal a randmon card. Since the desk is already suffled, will POP from array
        if (this.cards.length < 1){
            console.log("ERROR: No cards left in deck!");
            return;
        }
        return(this.cards.pop());
    }
    // Reset deck. Cards will be in order
    reset(){
        // console.log("Resetting cards..");
        // for (let i=1, 1 < 53; i++){
        //     this.cards.push(i);
        // }
        // console.log("done");
        // return;
        for (const suit of this.suits){
            for (const value of this.values){
                this.cards.push(new Card(suit, value));
            }
        }
        console.log(this.cards);
    }
    // Print the deck of cards
    printDeck(){
        console.log("Printing deck..");
        for (const card of this.cards){
            card.displayCard();
        }
        // for (let i=0; i < this.cards.length; i++){
        //      console.log(`${i+1}:${this.cards[i]}`);
        //}
    }
}

class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
        this.imgPath = this.getImgPath(suit, value.toString());
    }
    displayCard(){
        console.log(`${this.value} of ${this.suit}`);
    }
    getImgPath(suit, value){
        return ('cards-png/' + suit.charAt(0).toLowerCase() + value.charAt(0).toLowerCase() + '.png');
    }
}
// Deck objst
class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    // Take a card from the deck
    takeCard(deck){
        this.hand.push(deck.dealCard());
    }
    // Drop a card from the deck
    dropCard(card){
        if (card > this.hand.length-1){
            console.log("ERROR: Card is not in Deck array!");
        } else {
            this.hand.splice(card, 1);
        }
        return;
    }
    // Pring the player's hand
    printHand(){
        console.log(`Printing $(this.name}'s hand..`);
        for (let i=0; i < this.hand.length; i++){
            console.log(`${i+1}:${this.hand[i]}`);
        }
    }
}

// Tests
let myDeck = new Deck();
myDeck.reset();
myDeck.shuffle();
// myCard = myDeck.dealCard();
// console.log(myCard);
myDeck. printDeck();

const playerOne = new Player("Joe");
const playerTwo = new Player("Ralph");

// Deal 5 cards
// for (Let i = 0; i<5; i++){
//     playerOne.takeCard(myDeck);
//     playerTwo.takeCard(myDeck);
// }
// playerOne.printHand();
// playerTwo.printHand();