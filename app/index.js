const concat = require('./concat')
const sum = require('./sum')

const ConcatNumbers = [2,5,8,9,11,5]


const ConcatResult = concat.concat(ConcatNumbers)
const SumResult = sum.summation(ConcatNumbers)
console.log(`Concated Numbers Are:   ${ConcatResult}`)
console.log(`Sum is:   ${SumResult}`)