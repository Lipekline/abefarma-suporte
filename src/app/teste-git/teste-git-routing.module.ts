import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesteGitPage } from './teste-git.page';

const routes: Routes = [
  {
    path: '',
    component: TesteGitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesteGitPageRoutingModule {}
