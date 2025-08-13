const removeFromArray = function(list, ...remove) {
    const newArray = [];

    for (let i = 0; i < list.length; i++) {
        const value = list[i]; 
        if (!remove.includes(value)) {
            newArray.push(value);
        }

    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
