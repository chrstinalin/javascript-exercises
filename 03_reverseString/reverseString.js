const reverseString = function(string) {

    let returnVal = ""
    for(let i=string.length; i > 0; i--){
        returnVal = returnVal.concat(string.charAt(i - 1))
    }
    return returnVal

};

// Do not edit below this line
module.exports = reverseString;
