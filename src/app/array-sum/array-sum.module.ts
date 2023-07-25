import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySumHomeComponent } from './components/array-sum-home/array-sum-home.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ArraySumHomeComponent
  }
]

@NgModule({
  declarations: [
    ArraySumHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ArraySumModule { }
