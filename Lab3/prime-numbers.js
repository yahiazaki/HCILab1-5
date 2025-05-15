function findPrimeNumbers(lowerBound, upperBound) {
    var primes = [];
    for (var num = lowerBound; num <= upperBound; num++) {
        if (num < 2)
            continue;
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            primes.push(num);
    }
    return primes;
}
var lowerBound = 10;
var upperBound = 50;
var primes = findPrimeNumbers(lowerBound, upperBound);
console.log("Prime numbers between ".concat(lowerBound, " and ").concat(upperBound, ": ").concat(primes.join(", ")));
