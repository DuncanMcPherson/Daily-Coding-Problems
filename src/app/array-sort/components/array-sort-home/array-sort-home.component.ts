import { Component } from '@angular/core';
import {ArraySortService} from "../../services/array-sort.service";

@Component({
  selector: 'app-array-sort-home',
  templateUrl: './array-sort-home.component.html',
  styleUrls: ['./array-sort-home.component.scss']
})
export class ArraySortHomeComponent {
  private _originalArray: any[];
  private _sortedArray: any[];
  private _originalArrayString: string;

  public get originalArray(): any[] {
    return this._originalArray;
  }

  public get originalArrayString(): string {
    return this._originalArrayString;
  }

  public get sortedArray(): any[] {
    return this._sortedArray;
  }

  public set originalArrayString(value: string) {
    this.originalArray = this.convertStringToArray(value);
    this._originalArrayString = value;
  }

  private set originalArray(value: any[]) {
    this.sortedArray = this.arraySortService.sortArray(value);
    this._originalArray = value;
  }

  private set sortedArray(value: any[]) {
    this._sortedArray = value;
  }

  constructor(private readonly arraySortService: ArraySortService) {}

  private convertStringToArray(value: string): any[] {
    return value.split(',').map(x => x.trim()).map(x => +x);
  }
}
