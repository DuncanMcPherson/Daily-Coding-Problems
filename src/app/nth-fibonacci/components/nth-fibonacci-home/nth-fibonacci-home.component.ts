import { Component } from '@angular/core';
import {NthFibonacciService} from "../../services/nth-fibonacci.service";

@Component({
  selector: 'app-nth-fibonacci-home',
  templateUrl: './nth-fibonacci-home.component.html',
  styleUrls: ['./nth-fibonacci-home.component.scss']
})
export class NthFibonacciHomeComponent {
  private _n: number = 2;
  private _sequence: number[];

  public get n(): number {
    return this._n;
  }

  public set n(value: number) {
    if (value > 9999999) {
      return
    }
    this.sequence = this.nthFibonacciService.getFibonacciToN(value);
    this._n = value;
  }

  public get sequence(): number[] {
    return this._sequence;
  }

  private set sequence(value: number[]) {
    this._sequence = value;
  }

  constructor(private readonly nthFibonacciService: NthFibonacciService) {
  }
}
