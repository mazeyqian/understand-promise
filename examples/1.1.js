// Q/2009-2017
import Q from 'q'

function wantOdd () {
    const defer = Q.defer()
    const num = Math.floor(Math.random() * 10)
    if (num % 2) {
        defer.resolve(num)
    } else {
        defer.reject(num)
    }
    return defer.promise
}

wantOdd()
    .then(num => {
        log(`Success: ${num} is odd.`) // Success: 7 is odd.
    })
    .catch(num => {
        log(`Fail: ${num} is not odd.`)
    })