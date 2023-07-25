import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NthPrimeService {
  public getNthPrime(n: number): number {
    const primes: number[] = [
      2
    ];
    let i = 3;
    while (primes.length < n) {
      let isPrime = true;
      for (let index = 0; index < primes.length && isPrime; index++) {
        let prime = primes[index];
        let modulus = i % prime;
        isPrime = modulus != 0;
      }
      if (isPrime) {
        primes.push(i)
      }
      i += 2;
    }
    return primes[n - 1];
  }
}
