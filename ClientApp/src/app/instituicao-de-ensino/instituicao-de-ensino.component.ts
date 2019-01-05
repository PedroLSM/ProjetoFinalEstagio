import { Component, OnInit, ViewChild } from '@angular/core';
import { InstituicaoService } from '../services/instituicao/instituicao.service';
import { IInstituicaoDeEnsino } from '../services/instituicao/IInstituicaoDeEnsino';
import { MatDialog, MatTable } from '@angular/material';
import { NovaInstituicaoDeEnsinoComponent } from './nova-instituicao-de-ensino/nova-instituicao-de-ensino.component';
import { EditarInstituicaoDeEnsinoComponent } from './editar-instituicao-de-ensino/editar-instituicao-de-ensino.component';
import { DeletarInstituicaoDeEnsinoComponent } from './deletar-instituicao-de-ensino/deletar-instituicao-de-ensino.component';

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

  openUpdateDialog(instituicao) {
    const dialogRef = this.dialogRef.open(EditarInstituicaoDeEnsinoComponent, {
      width: '350px', disableClose: true, data: instituicao
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.editarInstituicao(result[0], result[1]);
      }
    })
  }

  openDeleteDialog(instituicao) {
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

  criarInstituicao(instituicao) {
    this.instituicaoService.create(instituicao)
      .subscribe(newInstituicao => {
        this.instituicoesDeEnsino.push(newInstituicao);
        this.table.renderRows();
      }),
      error => console.log(error)
  }

  editarInstituicao(instituicaoDeEnsinoId, instituicao) {
    this.instituicaoService.update(instituicaoDeEnsinoId, instituicao)
    .subscribe(() => {
      let index = this.getIndexInstituicao(instituicaoDeEnsinoId);
      
      instituicao['instituicaoDeEnsinoId'] = instituicaoDeEnsinoId;
      this.instituicoesDeEnsino[index] = instituicao;

      this.table.renderRows();
    }),
    error => console.log(error)
  }

  deletarInstituicao(instituicao) {
    this.instituicaoService.delete(instituicao.instituicaoDeEnsinoId)
      .subscribe(() => {
        let index = this.instituicoesDeEnsino.indexOf(instituicao);
        console.log(index);
        this.instituicoesDeEnsino.splice(index, 1);

        this.table.renderRows();
      });
  }

  getIndexInstituicao(id){
    for (const i of this.instituicoesDeEnsino) {
      if (i.instituicaoDeEnsinoId == id) return this.instituicoesDeEnsino.indexOf(i);
    }
  }

}
