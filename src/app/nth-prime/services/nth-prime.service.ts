import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NthPrimeService {
  private generatedPrimes: number[] = []
  public getNthPrime(n: number): number {
    const primes: number[] = this.generatedPrimes.length ? this.generatedPrimes : [
      2
    ];
    let i = primes.length == 1 ? 3 : primes[primes.length - 1];
    if (primes.includes(i)) {
      i += 2;
    }
    while (primes.length < n) {
      let isPrime = true;
      let isPastHalf = false;
      for (let index = 1; index < primes.length && isPrime && !isPastHalf; index++) {
        let prime = primes[index];
        isPastHalf = prime / i > 0.5;
        let modulus = i % prime;
        isPrime = modulus != 0;
      }
      if (isPrime) {
        primes.push(i)
      }
      i += 2;
    }
    this.generatedPrimes = primes;
    return primes[n - 1];
  }
}
