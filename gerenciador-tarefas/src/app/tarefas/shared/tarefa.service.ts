import { Injectable } from '@angular/core';

import { Tarefa } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  getTarefa(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  getTarefaPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.getTarefa();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  postTarefa(tarefa: Tarefa): void {
    const tarefas = this.getTarefa();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  putTarefa(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.getTarefa();
    tarefas.forEach((obj, index, objs) => {
      if(tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  putStatus(id: number): void {
    const tarefas: Tarefa[] = this.getTarefa();
    tarefas.forEach((obj, index, objs) => {
      if(obj.id === id){
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  deleteTarefa(id: number): void {
    let tarefas: Tarefa[] = this.getTarefa();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
