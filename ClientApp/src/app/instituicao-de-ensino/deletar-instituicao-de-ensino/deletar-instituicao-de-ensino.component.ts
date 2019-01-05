import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deletar-instituicao-de-ensino',
  templateUrl: './deletar-instituicao-de-ensino.component.html',
  styleUrls: ['./deletar-instituicao-de-ensino.component.css']
})
export class DeletarInstituicaoDeEnsinoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletarInstituicaoDeEnsinoComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNo(): void {
    this.dialogRef.close();
  }

  onYes(instituicao): void {
    this.dialogRef.close(instituicao);
  }

}
