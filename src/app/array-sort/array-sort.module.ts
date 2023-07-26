import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySortHomeComponent } from './components/array-sort-home/array-sort-home.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ArraySortHomeComponent
  }
]

@NgModule({
  declarations: [
    ArraySortHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ArraySortModule { }
