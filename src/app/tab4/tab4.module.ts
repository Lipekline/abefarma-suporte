import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { NovoColaboradorComponent } from './novo-colaborador/novo-colaborador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Tab4Page, DetalhesComponent, NovoColaboradorComponent],
  entryComponents: [DetalhesComponent,NovoColaboradorComponent]
})
export class Tab4PageModule { }
