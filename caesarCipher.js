function caesarCipher(string, shift) {
    if (typeof shift !== 'number') throw new TypeError('shift must be an integer number');
    if (!Number.isInteger(shift)) throw new TypeError('shift must be a integer');
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let encrypted = "";

    for(let i = 0; i < string.length; i++) {
        let current = string.at(i);

        if (lowerCase.includes(current)) {
            encrypted += lowerCase.at((lowerCase.indexOf(current) + shift) % 26);
        } else if(upperCase.includes(current)) {
            encrypted += upperCase.at((upperCase.indexOf(current) + shift) % 26);
        } else {
            encrypted += current;
        }
    }

    return encrypted;
}

module.exports = caesarCipher;