import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaROUTES } from './tarefas-routing.module'

export const routes: Routes = [
//definição das rotas
  ...TarefaROUTES
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
