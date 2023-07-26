import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NthFibonacciHomeComponent } from './components/nth-fibonacci-home/nth-fibonacci-home.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NthFibonacciHomeComponent
  }
]

@NgModule({
  declarations: [
    NthFibonacciHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class NthFibonacciModule { }
