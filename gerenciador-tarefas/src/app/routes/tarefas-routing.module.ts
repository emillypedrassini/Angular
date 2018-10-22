import { Routes } from '@angular/router';
import { ListarTarefaComponent, CadastrarTarefaComponent, EditarTarefaComponent } from '../tarefas';

export const TarefaROUTES: Routes = [
  { path: 'tarefas/listar', component: ListarTarefaComponent },
  { path: 'tarefas/cadastrar', component: CadastrarTarefaComponent },
  { path: 'tarefas/editar/:id', component: EditarTarefaComponent },
  { path: 'tarefas', redirectTo: 'tarefas/listar' },
  { path: '', redirectTo: 'tarefas/listar', pathMatch: 'full' }
];