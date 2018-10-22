import { Component, OnInit } from '@angular/core';

import { TarefaService } from 'src/app/tarefas/shared';
import { Tarefa } from 'src/app/models';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private _tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this._tarefaService.getTarefa();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this._tarefaService.deleteTarefa(tarefa.id);
      this.tarefas = this.listarTodos();
     }
  }

  alterarStatus(tarefa: Tarefa): void {
    if(confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this._tarefaService.putStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
