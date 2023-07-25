import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraySumService {
  public checkForSum(array: number[], sum: number): boolean {
    let containsSum = false;
    const allNumbersPositive = array.every(x => x > 0);
    if (allNumbersPositive) {
      array = array.filter(x => x < sum);
    }
    for (let index = 0; index < array.length - 1 && !containsSum; index++) {
      const value = array[index];
      for (let i = index + 1; i < array.length && !containsSum; i++) {
        let otherNumber = array[i];
        const actualSum = otherNumber + value;
        containsSum = actualSum === sum;
      }
    }
    return containsSum;
  }
}
