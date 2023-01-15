//This function returns an object with a random value of a card with a random suit
// For example, { value: 1, suit: 'diamonds' }


function getCard(){
    const valueArray = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const suitsArray = ['clubs','spades', 'hearts', 'diamonds'];
    let returnValue = {
        value: valueArray[Math.floor(Math.random() * valueArray.length)],
        suits: suitsArray[Math.floor(Math.random() * suitsArray.length)]
    };
    return returnValue;
}
console.log(getCard());
