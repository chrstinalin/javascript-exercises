const removeFromArray = function(array, ...args) {

    const returnArray = [];
    array.forEach(item => {
        if(!args.includes(item)) returnArray.push(item);
    });
    return returnArray;

};

// Do not edit below this line
module.exports = removeFromArray;
