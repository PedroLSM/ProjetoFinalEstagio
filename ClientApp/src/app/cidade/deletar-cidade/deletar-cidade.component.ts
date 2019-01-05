import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-deletar-cidade',
  templateUrl: './deletar-cidade.component.html',
  styleUrls: ['./deletar-cidade.component.css']
})
export class DeletarCidadeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletarCidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

    onNo(): void {
      this.dialogRef.close();
    }
  
    onYes(){
      this.dialogRef.close(this.data);
    }

  ngOnInit() {
  }

}
