import { UpdateEstadoComponent } from './update-estado/update-estado.component';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { NovoEstadoComponent } from './novo-estado/novo-estado.component';
import { DeletarEstadoComponent } from './deletar-estado/deletar-estado.component';
import { EstadoService } from '../services/estado/estado.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
  estados: any[];

  colunas = ['Id', 'UF', 'Nome', 'Deletar', 'Alterar'];

  addDialog() {
    const dialogRef = this.dialogRef.open(NovoEstadoComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.criarEstado(result);
      }
    })
  }

  updateDialog(estado) {
    const dialogRef = this.dialogRef.open(UpdateEstadoComponent, { disableClose: true, data: estado });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.editarEstado(result[0], result[1]);
      }
    })
  }

  deleteDialog(estado) {
    const dialogRef = this.dialogRef.open(DeletarEstadoComponent, {
      disableClose: true,
      width: '250px',
      data: estado
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.deletarEstado(result);
      }
    });
  }

  criarEstado(estado) {  
    this.estadoService.create(estado)
      .subscribe(newEstado => {
        this.estados.push(newEstado);
        this.table.renderRows();
      }),
      error => console.log(error)
  }

  editarEstado(estadoId, estado) {
    this.estadoService.update(estadoId, estado)
      .subscribe(() => {
        let index = this.getIndexEstado(estadoId);
        
        estado['estadoId'] = estadoId;
        this.estados[index] = estado;

        this.table.renderRows();
      }),
      error => console.log(error)
  }

  deletarEstado(estado) {
    this.estadoService.delete(estado.estadoId)
      .subscribe(() => {
        let index = this.estados.indexOf(estado);

        this.estados.splice(index, 1);

        this.table.renderRows();
      });
  }

  getIndexEstado(id){
    for (const e of this.estados) {
      if (e.estadoId == id) return this.estados.indexOf(e);
    }
  }

  constructor(public dialogRef: MatDialog, private estadoService: EstadoService) {
  }

  ngOnInit() {
    this.estadoService.getAll().subscribe(
      estados => {
        this.estados = estados;
      },
      error => console.log(error)
    );
  }

}