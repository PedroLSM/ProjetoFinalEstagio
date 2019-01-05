import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-deletar-estagiario',
  templateUrl: './deletar-estagiario.component.html',
  styleUrls: ['./deletar-estagiario.component.css']
})
export class DeletarEstagiarioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletarEstagiarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(estagiario): void {
    this.dialogRef.close(estagiario);
  }

}
