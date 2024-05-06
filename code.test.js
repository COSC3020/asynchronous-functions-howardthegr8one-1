const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'')

const randArray = (n, a = new Array(n)) => {
    for (let i = 0; i < a.length; i++) a[i] = Math.floor(Math.random() * (n+1))
    return a
}

const matchesSolution = (arr, key, count = 0) => {
    for (let i = 0; i < arr.length; i++) (arr[i] == key) ? count++ : count
    return count
}

const test =
    jsc.forall("nat", function(n) {
        let array = randArray(n)

        // Since the async countMatches returns a pending Promise I had to get a little creative
        // with how I compared the actual value the async function returns once the Promise is resolved
        return countMatches(array,n).then(res => {
            return JSON.stringify(res) == JSON.stringify(matchesSolution(array,n))})
    })

jsc.assert(test)
