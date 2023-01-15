// pangram is a sentence that contains all the letters in the english alphabets atleast once.
// This program checks to see if a given sentence is a pangram or not.

function isPangram(sentence){
    const alph = "abcdefghijklmnopqrstuvwxyz";
    let newSentence = sentence.toLowerCase().replaceAll(" ", "");
    console.log(newSentence);
    let result = true;
    for (let letter of alph)
        if (!newSentence.includes(letter))  
            return false;
        result = true;
    return result;
}
console.log(isPangram("Fox dwarves chop my talking quiz job"));
console.log(isPangram("Not a pangram"));
//
//
//
/*---This is a condensed version---*/
//
//
function isPangram(sentence){
    let newSentence = sentence.toLowerCase().replaceAll(" ", "");
    console.log(newSentence);
    for (let letter of "abcdefghijklmnopqrstuvwxyz")
        if (!newSentence.includes(letter))  
            return false;
    return true;
}
console.log(isPangram("Fox dwarves chop my talking quiz job"));
console.log(isPangram("Not a pangram"));
