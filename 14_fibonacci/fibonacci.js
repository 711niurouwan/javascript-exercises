const fibonacci = function(index) {
    let first = 0;
    let second = 1;

    let current = 1;

    if (index < 0) {
        return "OOPS";
    }
    if (index == 0) {
        return 0;
    }
    else {
        for (let i = 1; i < index; i++) {
        current = first + second;
        first = second;
        second = current;}
        return second;
}
};

// Do not edit below this line
module.exports = fibonacci;
