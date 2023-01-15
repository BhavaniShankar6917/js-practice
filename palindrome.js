function isPalindrome(word){
    let arr = [];
    for (let i of word)
        arr.unshift(i);
    console.log(arr);
    let the = arr.join("");
    console.log(the);
    return (the == word);
}
console.log(isPalindrome("ghghghg"));
