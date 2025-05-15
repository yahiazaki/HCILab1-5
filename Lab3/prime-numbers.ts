function findPrimeNumbers(lowerBound: number, upperBound: number): number[] {
    const primes: number[] = [];
    for (let num = lowerBound; num <= upperBound; num++) {
        if (num < 2) continue;
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
    }
    return primes;
}

const lowerBound = 10;
const upperBound = 50;
const primes = findPrimeNumbers(lowerBound, upperBound);
console.log(`Prime numbers between ${lowerBound} and ${upperBound}: ${primes.join(", ")}`);
