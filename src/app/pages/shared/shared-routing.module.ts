import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedPage } from './shared.page';

const routes: Routes = [
  {
    path: '',
    component: SharedPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'ferramentas',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'chamados',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'colaboradores',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedPageRoutingModule { }
