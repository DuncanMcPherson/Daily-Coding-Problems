import { Component } from '@angular/core';
import {NthPrimeService} from "../../services/nth-prime.service";

@Component({
  selector: 'app-nth-prime-home',
  templateUrl: './nth-prime-home.component.html',
  styleUrls: ['./nth-prime-home.component.scss']
})
export class NthPrimeHomeComponent {
  public currentN: number = 1;
  private oldN: number;
  private _nthPrime: number;
  public get nthPrime(): number {
    if (this.oldN == this.currentN) {
      return this._nthPrime;
    }
    return undefined;
  }

  private set nthPrime(value: number) {
    this._nthPrime = value;
  }
  private numericalEndings: string[] = [
    'st',
    'nd',
    'rd',
    'th'
  ]
  constructor(private readonly nthPrimeService: NthPrimeService) {}

  public setNthPrime(): void {
    this.oldN = this.currentN;
    this.nthPrime = this.getNthPrime(this.currentN);
  }

  public getNthPrime(n: number): number {
    if (n < 1) {
      return 1;
    }
    return this.nthPrimeService.getNthPrime(n);
  }

  public getNumericalEnding(n: number): string {
    const nString = n.toString();
    const endChar = nString[nString.length - 1];
    switch (endChar) {
      case '1':
        if (nString[nString.length - 2] == '1') {
          return this.numericalEndings[3];
        }
        return this.numericalEndings[0];
      case '2':
        if (nString[nString.length - 2] == '1') {
          return this.numericalEndings[3];
        }
        return this.numericalEndings[1];
      case '3':
        if (nString[nString.length - 2] == '1') {
          return this.numericalEndings[3];
        }
        return this.numericalEndings[2];
      default:
        return this.numericalEndings[3];
    }
  }
}
