import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NthPrimeHomeComponent } from './components/nth-prime-home/nth-prime-home.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NthPrimeHomeComponent
  }
]

@NgModule({
  declarations: [
    NthPrimeHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class NthPrimeModule { }
