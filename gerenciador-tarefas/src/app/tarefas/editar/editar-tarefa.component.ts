import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Tarefa } from 'src/app/models';
import { TarefaService } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private _tarefaService: TarefaService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    const id = +this._route.snapshot.params['id'];
    this.tarefa = this._tarefaService.getTarefaPorId(id);
  }

  atualizar() {
    if(this.formTarefa.form.valid) {
      this._tarefaService.putTarefa(this.tarefa);
      this._router.navigate(['/tarefas']);
    }
  }

}
