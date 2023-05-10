const sumAll = function(x, y) {

    if(!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) return "ERROR"

    let sum=0
    let min = x, max = y
    if(y < x) min = y, max = x

    for(let i=min; i<=max; i++){
        sum+=i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
