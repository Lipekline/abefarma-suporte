import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => import('./tela-login/tela-login.module').then( m => m.TelaLoginPageModule)
//   },
//   {
//     path: 'tab1',
//     loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
//   },
//   {
//     path: 'tab2',
//     loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
//   },
//   {
//     path: 'tab3',
//     loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
//   },
//   {
//     path: 'tab4',
//     loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule)
//   },
//   {
//     path: 'tabs',
//     loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
//   },
//   {
//     path: 'teste-git',
//     loadChildren: () => import('./teste-git/teste-git.module').then( m => m.TesteGitPageModule)
//   },
//   {
//     path: '**',
//     redirectTo: ""
//   },
//   {
//     path: 'shared',
//     loadChildren: () => import('./pages/shared/shared.module').then( m => m.SharedPageModule)
//   },



const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./pages/shared/shared.module').then(m => m.SharedPageModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/shared/home'
  }
];




// ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
