import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InstituicaoService } from '../../services/instituicao/instituicao.service';

@Component({
  selector: 'app-deletar-instituicao-de-ensino',
  templateUrl: './deletar-instituicao-de-ensino.component.html',
  styleUrls: ['./deletar-instituicao-de-ensino.component.css']
})
export class DeletarInstituicaoDeEnsinoComponent implements OnInit {

  constructor(private instituicaoService: InstituicaoService, public dialogRef: MatDialogRef<DeletarInstituicaoDeEnsinoComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNo(): void {
    this.dialogRef.close();
  }

  onYes(instituicao: any): void {
    this.instituicaoService.delete(instituicao.instituicaoDeEnsinoId)
      .subscribe(() => {
        this.dialogRef.close(instituicao);
      }, error => {
        alert("OCORREU UM ERRO NA HORA DE DELETAR \n" + error['_body'])
      });
  }

}
