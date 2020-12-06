const string_test = require('../index')


test('capitalize', () => {
    expect(('whats up').capitalize()).toBe('Whats up')

})


test('allCaps', () => {
    expect(('whats up').allCaps()).toBe('WHATS UP')

})

let testString1 = 'now this is going to capitalize all words in the sentence'
test('capitalizeWords', () => {
    expect(testString1.capitalizeWords()).toBe('Now This Is Going To Capitalize All Words In The Sentence ')

})

let stringTest2 = '  why are  there   so many  spaces     in  this sentence'
test('removeExtraSpaces', () => {
    expect(stringTest2.removeExtraSpaces()).toBe('why are there so many spaces in this sentence')

})

test('kabobCase', () => {
    expect(stringTest2.kabobCase()).toBe('why-are-there-so-many-spaces-in-this-sentence')
})

test('snakeCase', () => {
    expect(stringTest2.snakeCase()).toBe('why_are_there_so_many_spaces_in_this_sentence')
})

test('camelCase', () => {
    expect(stringTest2.camelCase()).toBe('whyArethereSoManyspacesInthisSentence')
})

let shiftTest = 'it really is a beautiful day today'
test('shift', () => {
    expect(shiftTest.shift()).toBe('ti eallyr si a eautifulb ayd odayt')
})