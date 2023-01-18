////*******************************************************/////
////*******************************************************/////
////*****************Deck of Cards*************************/////
////*******************************************************/////
////*******************************************************/////
const cards = {
    suits : ['clubs', 'diamonds', 'hearts', 'spades'],
    values : ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'],
    myDeck: [],
    shuffledDeck : [],
    drawnCards: [],
    makeDeck(){
        const {
            suits,
            values,
            myDeck
        } = this;
        for(let suit of suits)
            for(let value of values)
            myDeck.push({
                    suit,
                    value
                })
    },
    shuffle(){
        let{
            myDeck,
            shuffledDeck
        } = this;
        while (shuffledDeck.length < 52){
            let random = Math.floor(Math.random() * myDeck.length);
            if(!shuffledDeck.includes(myDeck[random]))
                shuffledDeck.push(myDeck[random]);
            shuffledDeck.length;  
        }
        cards.myDeck = cards.shuffledDeck
        //console.log(shuffledDeck);
    },
    drawCards(){
        const card = this.myDeck.shift()
        this.drawnCards.push(card);
        return card;
    },
    drawMultipleCards(num){
        const multipleCards = [];
        for(let i=0; i < num; i++)
            multipleCards.push(this.drawCards());
        return multipleCards;
    },
    showDrawnCards(){
        return this.drawnCards;
    }
}
cards.makeDeck();
cards.shuffle();
cards.drawMultipleCards(15);
console.log(cards.drawnCards);
cards.myDeck;

