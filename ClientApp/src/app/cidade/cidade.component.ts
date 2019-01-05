import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { CidadeService } from '../services/cidade/cidade.service';
import { AdicionarCidadeComponent } from './adicionar-cidade/adicionar-cidade.component';
import { AtualizarCidadeComponent } from './atualizar-cidade/atualizar-cidade.component';
import { DeletarCidadeComponent } from './deletar-cidade/deletar-cidade.component';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;

  cidadesBackup: any[];
  cidades: any[];
  estadosWithCidade: any[] = [];
  selected: any = "";

  colunas: string[] = ['id', "UF", 'nome', "deletar", "atualizar"];

  constructor(private cidadeService: CidadeService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.cidadeService.getAll().subscribe(cidades => {
      this.cidades = cidades;
      this.cidadesBackup = cidades;

      for (const cidade of cidades) {
        if (this.estadosWithCidade.findIndex(val => val.estadoId == cidade.estado.estadoId) >= 0) continue;
        this.addEstado(cidade.estado);
      }
    })

  }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(AdicionarCidadeComponent, {
      width: '350px',
      disableClose: true,
      data: { estado: this.selected }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.criarCidade(result);
      }
    });

  }

  openDialogUpdate(cidade): void {
    const dialogRef = this.dialog.open(AtualizarCidadeComponent, {
      width: '300px',
      disableClose: true,
      data: cidade
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.editarCidade(result[0], result[1]);
      }
    });

  }

  openDialogDelete(cidade): void {
    const dialogRef = this.dialog.open(DeletarCidadeComponent, {
      width: '300px',
      disableClose: true,
      data: cidade
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.deletarCidade(result);
      }
    });

  }

  criarCidade(cidade) {

    this.cidadeService.create(cidade)
      .subscribe(newCidade => {
        console.log(newCidade);

        if (!(this.estadosWithCidade.findIndex(val => val.estadoId == newCidade.estado.estadoId) >= 0)) {
          this.addEstado(newCidade.estado);
        }

        this.cidades.push(newCidade);
        this.cidadesBackup.push(newCidade);

        this.table.renderRows();
      }),
      error => console.log(error)
  }

  editarCidade(cidadeId, cidade) {
    this.cidadeService.update(cidadeId, cidade)
      .subscribe((cidadeEdited) => {
        let index = this.getIndexCidade(cidadeId);
        let estadoIdAntigo = this.cidadesBackup[index].estado.estadoId;
        this.cidadesBackup[index] = cidadeEdited;

        if (cidadeEdited.estado.estadoId != estadoIdAntigo) {

          let addEstado: boolean =
            this.getContemEstado(cidadeEdited.estado) >= 0 ? false : true;


          if (!this.getEstadoContemCidade(this.selected)) {
            let indexSelected = this.getContemEstado(this.selected);

            this.estadosWithCidade.splice(indexSelected, 1);
          }


          if (addEstado) {
            this.addEstado(cidadeEdited.estado);

            let index = 0;
            for (const estado of this.estadosWithCidade) {

              if (!this.getEstadoContemCidade(estado)) {
                this.estadosWithCidade.splice(index, 1);
                break;
              }

              index = index + 1;
            }

          }
        }

        this.onChange();
      }),
      error => console.log(error)
  }

  deletarCidade(cidade) {
    this.cidadeService.delete(cidade.cidadeId)
      .subscribe(() => {
        let index = this.cidadesBackup.indexOf(cidade);

        this.cidadesBackup.splice(index, 1);

        this.onChange();
      });
  }

  onChange() {
    this.cidades = [...this.cidadesBackup];

    if (this.selected == "") return;

    let index = this.estadosWithCidade
      .findIndex(val => val.uf == this.selected.uf)

    if (index < 0) return;

    this.cidades = this.cidades.filter(c => c.estado.uf == this.selected.uf);
  }

  getEstadoComCidades() {
    let arr = []
    for (const cidade of this.cidadesBackup) {
      if (arr.findIndex(val => val.estadoId == cidade.estado.estadoId) >= 0) continue;
      let estado = Object.assign({}, cidade.estado);
      arr.push(estado);
    }

    return arr;
  }

  getIndexCidade(cidadeId) {
    for (const c of this.cidadesBackup) {
      if (c.cidadeId == cidadeId) return this.cidadesBackup.indexOf(c);
    }
  }

  getContemEstado(estado) {
    return this.estadosWithCidade
      .findIndex(val => {
        return (
          val.estadoId == estado.estadoId
        )
      });
  }

  getEstadoContemCidade(estado) {
    return this.getEstadoComCidades()
      .findIndex(val => {
        return (
          val.estadoId == estado.estadoId
        )
      }) >= 0;
  }

  addEstado(estado) {
    let estadoCopy = Object.assign({}, estado);
    this.estadosWithCidade.push(estadoCopy);
  }

};
