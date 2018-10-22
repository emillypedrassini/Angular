import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm } from '@angular/forms';

import { TarefaService } from '../shared';
import { Tarefa } from 'src/app/models';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private _tarefaService: TarefaService,
    private _router: Router) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if(this.formTarefa.form.valid) {
      this._tarefaService.postTarefa(this.tarefa);
      this._router.navigate(["/tarefas"]);
    }
  }
}
