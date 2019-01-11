import { Component, OnInit, ViewChild } from '@angular/core';
import { InstituicaoService } from '../services/instituicao/instituicao.service';
import { IInstituicaoDeEnsino } from '../services/instituicao/IInstituicaoDeEnsino';
import { MatDialog, MatTable } from '@angular/material';
import { NovaInstituicaoDeEnsinoComponent } from './nova-instituicao-de-ensino/nova-instituicao-de-ensino.component';
import { EditarInstituicaoDeEnsinoComponent } from './editar-instituicao-de-ensino/editar-instituicao-de-ensino.component';
import { DeletarInstituicaoDeEnsinoComponent } from './deletar-instituicao-de-ensino/deletar-instituicao-de-ensino.component';
import { MostrarAlunosComponent } from './mostrar-alunos/mostrar-alunos.component';

@Component({
  selector: 'app-instituicao-de-ensino',
  templateUrl: './instituicao-de-ensino.component.html',
  styleUrls: ['./instituicao-de-ensino.component.css']
})
export class InstituicaoDeEnsinoComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns: string[] = ['Id', 'Sigla', 'Nome', 'Alunos', 'Deletar', 'Alterar'];
  instituicoesDeEnsino: any[];

  constructor(private instituicaoService: InstituicaoService, public dialogRef: MatDialog) { }

  ngOnInit() {
    this.instituicaoService.getAll().subscribe(
      instituicoes => {
        this.instituicoesDeEnsino = instituicoes;
      },
      error => console.log(error)
    );
  }

  openCreateDialog() {
    const dialogRef = this.dialogRef.open(NovaInstituicaoDeEnsinoComponent, {
      width: '350px', disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.criarInstituicao(result);
      }
    })
  }

  openUpdateDialog(instituicao: any) {
    const dialogRef = this.dialogRef.open(EditarInstituicaoDeEnsinoComponent, {
      width: '350px', disableClose: true, data: instituicao
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.editarInstituicao(result[0], result[1]);
      }
    })
  }

  openDeleteDialog(instituicao: any) {
    const dialogRef = this.dialogRef.open(DeletarInstituicaoDeEnsinoComponent, {
      disableClose: true,
      width: '250px',
      data: instituicao
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.deletarInstituicao(result);
      }
    });
  }

  openMostrarAlunosDialog(instituicao: any) {
    this.dialogRef.open(MostrarAlunosComponent, {
      disableClose: true,
      width: '500px',
      data: instituicao
    });
  }

  criarInstituicao(newInstituicao: any) {
    this.instituicoesDeEnsino.push(newInstituicao);
    this.table.renderRows();
  }

  editarInstituicao(instituicaoDeEnsinoId: any, instituicao: { [x: string]: any; }) {
    let index = this.getIndexInstituicao(instituicaoDeEnsinoId);

    instituicao['instituicaoDeEnsinoId'] = instituicaoDeEnsinoId;
    this.instituicoesDeEnsino[index] = instituicao;

    this.table.renderRows();
  }

  deletarInstituicao(instituicao: any) {
    let index = this.instituicoesDeEnsino.indexOf(instituicao);
    this.instituicoesDeEnsino.splice(index, 1);
    this.table.renderRows();
  }

  getIndexInstituicao(id: any) {
    for (const i of this.instituicoesDeEnsino) {
      if (i.instituicaoDeEnsinoId == id) return this.instituicoesDeEnsino.indexOf(i);
    }
  }

}
