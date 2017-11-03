import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternalComponent } from './pages/internal/internal.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjetoComponent } from './pages/projeto/projeto.component';
import { FinanciamentoComponent } from './pages/financiamento/financiamento.component';
import { AcompanharComponent } from './pages/acompanhar/acompanhar.component';
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
      {
       path: 'acompanhar',
       component: AcompanharComponent 
      },
      {
        path: 'financiamento',
        component: FinanciamentoComponent
      },
      {
        path: 'projeto',
        component: ProjetoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
