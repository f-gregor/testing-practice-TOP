function reverseString(string) {
    let reversed = "";
    for(let i = string.length - 1; i >= 0; i--) {
        reversed += string.at(i);
    };
    return reversed;
}

module.exports = reverseString;