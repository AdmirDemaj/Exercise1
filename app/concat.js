const _ =require('lodash')
const fs = require('fs')

let JsonNumbers = fs.readFileSync('array.json')
let ObjectNumbers = JSON.parse(JsonNumbers)
const numbers = ObjectNumbers.nums

function concat(arr){
    return _.concat(arr, numbers)
}

module.exports.concat = concat

