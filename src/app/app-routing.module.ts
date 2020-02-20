import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'teste-git',
    loadChildren: () => import('./teste-git/teste-git.module').then( m => m.TesteGitPageModule)
  },
  {
    path: '**',
    redirectTo: ""
  },
  {
    path: 'tab0',
    loadChildren: () => import('./tab0/tab0.module').then( m => m.Tab0PageModule)
  },
  {
    path: 'tela-login',
    loadChildren: () => import('./tela-login/tela-login.module').then( m => m.TelaLoginPageModule)
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
