// Used my async function exercise from last semester as a reference

function countMatches (arr, key) {
    const async = require('async')

    const isKey = (n, cb) => cb(null, n == key ? 1 : 0)
    
    const counter = (prev, curr, cb) => cb(null, prev + curr)

    return async.map(arr, isKey).then((results) => async.reduce(results, 0, counter))
}
