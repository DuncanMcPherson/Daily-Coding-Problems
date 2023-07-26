import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraySortService {
  public sortArray(arr: any[]): any[] {
    for (let i = 1; i < arr.length; i++) {
      let n = i;
      while (n > 0 && arr[n - 1] > arr[n]) {
        let k = arr[n];
        arr[n] = arr[n - 1];
        arr[n - 1] = k;
        n--;
      }
    }
    return arr;
  }
}
