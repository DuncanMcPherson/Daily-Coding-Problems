import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NthFibonacciService {
  public getFibonacciToN(n: number): number[] {
    if (n == 1) {
      return [0];
    }
    if (n == 2) {
      return [0, 1];
    }

    const sequence: number[] = [0, 1];
    while (sequence.length < n) {
      let i = sequence.length
      const newNumber = sequence[i - 2] + sequence[i - 1];
      sequence.push(newNumber);
    }
    return sequence;
  }
}
