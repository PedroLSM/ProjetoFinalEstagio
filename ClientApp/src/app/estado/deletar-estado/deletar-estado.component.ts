import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogClose, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deletar-estado',
  templateUrl: './deletar-estado.component.html',
  styleUrls: ['./deletar-estado.component.css']
})
export class DeletarEstadoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeletarEstadoComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  onNo(): void {
    this.dialogRef.close();
  }

  onYes(estado): void {
    this.dialogRef.close(estado);
  }

  ngOnInit() {
  }

}
