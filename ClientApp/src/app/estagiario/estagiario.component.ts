import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { NovoEstagiarioComponent } from './novo-estagiario/novo-estagiario.component';
import { EditarEstagiarioComponent } from './editar-estagiario/editar-estagiario.component';
import { DeletarEstagiarioComponent } from './deletar-estagiario/deletar-estagiario.component';
import { EstagiarioService } from '../services/estagiario/estagiario.service';

@Component({
  selector: 'app-estagiario',
  templateUrl: './estagiario.component.html',
  styleUrls: ['./estagiario.component.css']
})
export class EstagiarioComponent implements OnInit {
  colunas: string[] = ['id', 'instituicao', 'cidade', 'nome', 'nascimento', 'deletar', 'atualizar'];
  estagiarios: any[];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private estagiarioService: EstagiarioService, public dialog: MatDialog) { }

  ngOnInit() {
    this.estagiarioService.getAll()
      .subscribe(estagiarios => {
        this.estagiarios = estagiarios;
      }),
      error => console.log(error)
  }

  abrirDialogoCriar() {
    const dialogRef = this.dialog.open(NovoEstagiarioComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.criarEstagiario(result)
      }
    })
  }

  abrirDialogoEditar(estagiario: any) {
    const dialogRef = this.dialog.open(EditarEstagiarioComponent, {
      width: '500px',
      disableClose: true,
      data: estagiario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log(result[1])
        this.editarEstagiario(result[0], result[1]);
      }
    })
  }

  abrirDialogoDeletar(estagiario: any) {
    const dialogRef = this.dialog.open(DeletarEstagiarioComponent, {
      width: '300px',
      disableClose: true,
      data: estagiario
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.deletarEstagiario(result)
      }
    })
  }

  deletarEstagiario(estagiario: any) {
    this.estagiarios = this.estagiarios.filter(e => {
      if (e != estagiario) return true;
    });
  }

  criarEstagiario(newEstagiario: any) {
    this.estagiarios.push(newEstagiario);
    this.table.renderRows();
  }

  editarEstagiario(estagiarioId: any, estagiarioEdited: any) {
    let index = this.getIndexEstagiario(estagiarioId);
    this.estagiarios[index] = estagiarioEdited;
    this.table.renderRows();
  }

  getIndexEstagiario(id: any) {
    for (const e of this.estagiarios) {
      if (e.estagiarioId == id) return this.estagiarios.indexOf(e);
    }
  }
}
