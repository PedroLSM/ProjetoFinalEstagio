import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EstadoService } from '../../services/estado/estado.service';

@Component({
  selector: 'app-deletar-estado',
  templateUrl: './deletar-estado.component.html',
  styleUrls: ['./deletar-estado.component.css']
})
export class DeletarEstadoComponent implements OnInit {

  constructor(private estadoService: EstadoService, private dialogRef: MatDialogRef<DeletarEstadoComponent>, @Inject(MAT_DIALOG_DATA) public data) { }
  
  ngOnInit() {
  }

  onNo(): void {
    this.dialogRef.close();
  }

  onYes(estado: void): void {    
    this.estadoService.delete(estado['estadoId'])
      .subscribe(() => {
        this.dialogRef.close(estado);
      }, error => {
        alert("OCORREU UM ERRO NA HORA DE DELETAR \n" + error['_body']);
      });
  }

  

}
