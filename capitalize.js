function capitalize(string) {
    if (!string) return "";
    let start = string.at(0).toUpperCase();
    return start + string.substring(1);
};

module.exports = capitalize;