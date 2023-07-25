import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // TODO: Create Home route and display
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/projects'
  },
  {
    path: 'projects',
    loadChildren: () => import('./problems/problems.module').then(m => m.ProblemsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
