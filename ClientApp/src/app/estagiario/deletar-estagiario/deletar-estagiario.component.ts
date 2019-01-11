import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EstagiarioService } from '../../services/estagiario/estagiario.service';

@Component({
  selector: 'app-deletar-estagiario',
  templateUrl: './deletar-estagiario.component.html',
  styleUrls: ['./deletar-estagiario.component.css']
})
export class DeletarEstagiarioComponent implements OnInit {

  constructor(private estagiarioService: EstagiarioService, public dialogRef: MatDialogRef<DeletarEstagiarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(estagiario: { estagiarioId: any; }): void {
    this.estagiarioService.delete(estagiario.estagiarioId)
      .subscribe(() => {
        this.dialogRef.close(estagiario);
      }, error => {
        alert("OCORREU UM ERRO NA HORA DE DELETAR \n" + error['_body'])
      });
  }

}
