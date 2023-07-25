import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {ArraySumService} from "../../services/array-sum.service";
import {combineLatest, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-array-sum-home',
  templateUrl: './array-sum-home.component.html',
  styleUrls: ['./array-sum-home.component.scss']
})
export class ArraySumHomeComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public hasSum: boolean;
  public desiredSum: number;

  private destroy$$: Subject<void> = new Subject<void>();

  constructor(private readonly arraySumService: ArraySumService) {
  }

  public ngOnInit(): void {
    this.form = new FormGroup<any>({
      arrayInput: new FormControl<string>('', [Validators.required, this.validateArray()]),
      selectedSum: new FormControl<number>(0, [Validators.required])
    });

    combineLatest([
      this.form.get('arrayInput').valueChanges,
      this.form.get('selectedSum').valueChanges
    ]).pipe(
      takeUntil(this.destroy$$)
    ).subscribe(([, sum]) => {
      this.hasSum = undefined;
      if (!!sum) {
        this.desiredSum = sum;
      }
    });
  }

  public ngOnDestroy(): void {
    this.destroy$$.next();
  }

  public checkSums(): void {
    if (!this.form.valid) {
      return;
    }

    const {arrayInput, selectedSum} = this.form.value;

    const array = this.convertToArray(arrayInput);
    this.hasSum = this.arraySumService.checkForSum(array, selectedSum);
  }

  public getIsFormValid(): boolean {
    return this.form.valid;
  }

  private validateArray(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return null;
      }

      const arrayValue = (control.value as string).split(',');
      let isValid = true;
      for (let i = 0; i < arrayValue.length && isValid; i++) {
        const value = arrayValue[i];
        if (isNaN(+value.trim())) {
          isValid = false;
        }
      }

      return isValid ? null : {notANumberArray: true}
    };
  }

  private convertToArray(input: string): number[] {
    const stringArray = input.split(',');
    return stringArray.map(x => +x.trim());
  }
}
