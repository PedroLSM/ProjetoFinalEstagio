import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-estado',
  templateUrl: './novo-estado.component.html',
  styleUrls: ['./novo-estado.component.css']
})
export class NovoEstadoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<NovoEstadoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data) { }

  formAdd = new FormGroup({
    uf: new FormControl('',
      [Validators.required,
      Validators.maxLength(2),
      Validators.minLength(2),
      Validators.pattern('[A-Z]*')]),
    nome: new FormControl('',
      [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(19),
      Validators.pattern('[a-zA-ZÀ-ú ]*')])
  });

  onNo() {
    return this.dialogRef.close();
  }

  onYes(formValues){
    if (!this.formAdd.invalid) {
      this.dialogRef.close(formValues.value);
    } else {
      alert('CONTÉM CAMPOS INVÁLIDOS');
    }
  }

  get uf() {
    return this.formAdd.get('uf');
  }

  get nome() {
    return this.formAdd.get('nome');
  }

  ngOnInit() {
  }

}
