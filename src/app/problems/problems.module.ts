import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemNavigationComponent } from './components/problem-navigation/problem-navigation.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProblemNavigationComponent
  },
  {
    path: 'nth-prime',
    loadChildren: () => import('../nth-prime/nth-prime.module').then(m => m.NthPrimeModule)
  },
  {
    path: 'array-sum',
    loadChildren: () => import('../array-sum/array-sum.module').then(m => m.ArraySumModule)
  },
  {
    path: 'nth-fibonacci',
    loadChildren: () => import('../nth-fibonacci/nth-fibonacci.module').then(m => m.NthFibonacciModule)
  },
  {
    path: 'array-sort',
    loadChildren: () => import('../array-sort/array-sort.module').then(m => m.ArraySortModule)
  }
]

@NgModule({
  declarations: [
    ProblemNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProblemsModule { }
