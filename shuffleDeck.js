const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const values = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
function makeDeck(suits, values){
    const deck = [];
    for(let suit of suits)
        for(let value of values)
            deck.push({
                suit,
                value
            })
    return deck;
}
const mydeck = makeDeck(suits, values);
function shuffle(deck){
    const newArr = [];

    while (newArr.length < 52){
        let random = Math.floor(Math.random() * deck.length);
        if(!newArr.includes(deck[random]))
            newArr.push(deck[random]);
        newArr.length;  
    }
    console.log(newArr);
}
shuffle(mydeck);
