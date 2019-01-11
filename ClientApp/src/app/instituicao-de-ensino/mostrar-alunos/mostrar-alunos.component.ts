import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { EstagiarioService } from '../../services/estagiario/estagiario.service';

@Component({
  selector: 'app-mostrar-alunos',
  templateUrl: './mostrar-alunos.component.html',
  styleUrls: ['./mostrar-alunos.component.css']
})
export class MostrarAlunosComponent implements OnInit {
  estagiarios: any[];
  constructor(private estagiarioService: EstagiarioService,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.estagiarioService.getAll()
      .subscribe((estagiarios: any[]) => {
        this.estagiarios = estagiarios.filter(e => {
          if(this.data.nome == e.instituicaoDeEnsino.nome && 
            this.data.sigla == e.instituicaoDeEnsino.sigla){
              return true;
            }
        });
      });
  }

}
