import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-editar-instituicao-de-ensino',
  templateUrl: './editar-instituicao-de-ensino.component.html',
  styleUrls: ['./editar-instituicao-de-ensino.component.css']
})
export class EditarInstituicaoDeEnsinoComponent implements OnInit {
  instituicaoDeEnsinoId = this.data.instituicaoDeEnsinoId;
  form = new FormGroup({
    sigla: new FormControl(this.data.sigla, 
    [
      Validators.required, 
      Validators.maxLength(8), 
      Validators.pattern('[A-Z0-9]*')
    ]),
    nome: new FormControl(this.data.nome, [Validators.required])
  });

  constructor(private dialogRef: MatDialogRef<EditarInstituicaoDeEnsinoComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNo() {
    return this.dialogRef.close();
  }

  onYes(formValues) {
    if (!this.form.invalid) {
      this.dialogRef.close([this.instituicaoDeEnsinoId, formValues.value]);
    } else {
      alert('CONTÉM CAMPOS INVÁLIDOS');
    }
  }

  get sigla() {
    return this.form.get('sigla');
  }

  get nome() {
    return this.form.get('nome');
  }

}
