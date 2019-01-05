import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-estado',
  templateUrl: './update-estado.component.html',
  styleUrls: ['./update-estado.component.css']
})
export class UpdateEstadoComponent implements OnInit {
  
  estadoId = this.data.estadoId;
  
  formUpdate = new FormGroup({
    uf: new FormControl(this.data.uf,
      [
        Validators.required,
        Validators.maxLength(2),
        Validators.minLength(2),
        Validators.pattern('[A-Z]*')
      ]),
    nome: new FormControl(this.data.nome,
      [
        Validators.required,
        Validators.maxLength(19),
        Validators.minLength(4),
        Validators.pattern('[a-zA-ZÀ-ú ]*')
      ])
  });

  constructor(private dialogRef: MatDialogRef<UpdateEstadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  onNo() {
    return this.dialogRef.close();
  }

  onYes(formValues) {
    if (!this.formUpdate.invalid) {
      this.dialogRef.close([this.estadoId, formValues.value]);
    } else {
      alert('CONTÉM CAMPOS INVÁLIDOS');
    }
  }

  get uf() {
    return this.formUpdate.get('uf');
  }

  get nome() {
    return this.formUpdate.get('nome');
  }

  ngOnInit() {
  }

}
