import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TesteGitPageRoutingModule } from './teste-git-routing.module';

import { TesteGitPage } from './teste-git.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TesteGitPageRoutingModule
  ],
  declarations: [TesteGitPage]
})
export class TesteGitPageModule {}
