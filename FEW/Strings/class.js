/*
    1. Write a function that uppercases the first character of string
    2. Write a function that uppercases the first letter of each word in a string
    3. Write a function that uppercases every other letter
    4. Write a function taht removes all whitespace from a given string
    5. write a function that removes onlyt the extra whitespace from a given string (example: "a    b"->"ab")
*/

const str = 'hello world'
String.prototype.uppercase = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}
// const result = "hello world".uppercase() 
// console.log(result);
//const upperCaseFirst = str => {
    // let first = str[0].toUpperCase()
    // return first + str.slice(1)
// }
// console.log(upperCaseFirst(str));
String.prototype.uppercasefirst = function() {
    return this.split(' ').map(this.toUpperCase).join(' ')
}
const result = "hello world".uppercasefirst()
console.log(result);
// const splitUpperCase = str => {
//     return str.split(' ').map(upperCaseFirst).join(' ')
// }
// console.log(splitUpperCase(str));

// const everyOther = str => {
//     let result, i;
//     result = ""
//     for (i = 0; i < str.length; i++){
//         result += i % 2 === 0 ? str.charAt(i).toUpperCase() : str.charAt(i)
//     }
//     return result
// }
// console.log(everyOther(str));

// const str2 = '        hello world               '
// const removeWhiteSpace = str => {
//     return str.trim()
// }
// console.log(removeWhiteSpace(str2));

// const str3 = 'hello        world'
// const removeExtraSpace = str => {
//     return str.replace(/\s/g, "")
// }
// console.log(removeExtraSpace(str3));

