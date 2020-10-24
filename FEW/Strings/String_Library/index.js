// Challenge 1 capitalize() - makes the first character of a given string uppercase
// Challenge 2 allCaps() - makes all characters uppercase
// Challenge 3 capitalizeWords() - makes the first character of each upperCase
// Challenge 4 removeExtraSpaces() - Removes all spaces from the beginning and end of String along with any extra spaces in the 
// middle. If more than one space appears in the middle of a string it is replaced by a single space
// Challenge 5 kabobCase() - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase
// Challenge 6 snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase
// Challenge 7 camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other 
// words, and removes the spaces 
// Challenge 8 shit() - This method will take the first character of a string and move to the end of a string 

const string = "hello world"
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}
// const result = string.capitalize()
// console.log(result);

String.prototype.allCaps = function() {
    // let string, result;
    // result = ""
    // string = this.split('').forEach(el => result += el.capitalize())
    // return result
    return this.toUpperCase()
}
// const result = string.allCaps()
// console.log(result);

String.prototype.capitalizeWords = function() {
    let string, result;
    result = ""
    string = this.split(' ').map(el => result += el.capitalize() + ' ')
    return result
}
// const result = string.capitalizeWords()
// console.log(result);

const extended = "    hello    world     "
String.prototype.removeExtraSpaces = function(pattern) {
    return this.replace(/\s+/g, pattern).trim()
}
// const result = extended.removeExtraSpaces(' ')
// console.log(result);

String.prototype.kabobCase = function(pattern) {
    return this.toLowerCase().removeExtraSpaces().replace(/\s+/g,pattern)
}
// const result = extended.kabobCase('-')
// console.log(result);

String.prototype.snakeCase = function(pattern) {
    return this.toLowerCase().removeExtraSpaces().replace(/\s+/g, pattern)
}
// const result = extended.snakeCase('_')
// console.log(result);

String.prototype.camelCase = function() {
    let string, string_length,result, i;
    string = this.split(' ')
    result = ''
    for(word of string){
        result += word.capitalize()
    }
    result = result[0].toLowerCase() + result.slice(1);
    return result
    // string = this.toLowerCase().replace(/(>:(^.)|([-_\s]+.))/g, function(match){
    //     return match.charAt(match.length-1).toUpperCase();
    // });
    // return string.charAt(0).toLowerCase() + string.substring(1)
}
// result = string.camelCase()
// console.log(result);
const input = 'foo bar'
String.prototype.shift = function(space){
    let string, result;
    string = this.slice(space) + this.substring(0,space)
    return string
}

result  = input.shift(2)
console.log(result);


