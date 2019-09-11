const createArrayOfSentences = text => {

    // Find:
    // ( -> )
    // ^ -> . | ? | ! | $

    var regex = /\(?[^\.\?!]+[\.\?!]+\)?|\(?[^\.\?!]+$/g
    if (!text.match(regex)) return ['']
    return text.match(regex)

}

const convertToLowerCase = arrayOfSentences => arrayOfSentences.map(sentence =>
    sentence.toLowerCase().trim())

const convertFirstCharToUpperCase = arrayOfSentences => arrayOfSentences.map(s =>
    s.replace(/[a-z]/, c => c.toUpperCase()))

const joinSentences = arrayOfSentences => arrayOfSentences.join(' ')

/**
 * Execute the reducer function on each array element
 * reducer = (accumulator, currentFunc) => currentFunc(accumulator)
 * 
 * @param  {...function} funcs - a sequence of one parameter functions
 * @return {function} A function that takes an inital value and runs it
 *      through a sequence of functions, returning a single output value
 * 
 * @example
 * 
 *      pipe(func1, func2, func3)
 *
 */
const pipe = (...funcs) => (initialValue) => funcs.reduce(reducer, initialValue)
const reducer = (accumulator, currentFunc) => currentFunc(accumulator)

// Create pipe and execute with initial value of text
module.exports = text => pipe(
    createArrayOfSentences,
    convertToLowerCase,
    convertFirstCharToUpperCase,
    joinSentences
)(text)
