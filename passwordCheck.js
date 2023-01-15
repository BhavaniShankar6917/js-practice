function isValidPassword(username, password){
    return (password.length > 8 && !password.includes(" ") && !password.includes(username));
}
console.log(isValidPassword("hrsgavws", "nothing123"));
// checks to see if the entered password
// 1. is of length greater than 8
// 2. has whitespace in it
// 3. has the characters of username in it.
