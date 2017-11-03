import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternalComponent } from './pages/internal/internal.component';
import { HomeComponent } from './pages/home/home.component';
import { SiteComponent } from './parts/site/site.component';


const routes: Routes = [
  {
    path: '',
    component: SiteComponent,

    /* ------- External area ------------- */
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'internal',
        component: InternalComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
