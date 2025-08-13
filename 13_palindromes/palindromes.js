const palindromes = function (string) {
    let newString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();


    for (let ii = 0, jj = newString.length; ii < jj; ii++, jj--) {
        if (newString[ii] !== newString[jj - 1]) {
        return false;
    }}
        return true;


};

// Do not edit below this line
module.exports = palindromes;
