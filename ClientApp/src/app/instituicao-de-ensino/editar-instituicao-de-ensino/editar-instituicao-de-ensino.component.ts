import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InstituicaoService } from '../../services/instituicao/instituicao.service';

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

  constructor(private instituicaoService: InstituicaoService, private dialogRef: MatDialogRef<EditarInstituicaoDeEnsinoComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNo() {
    return this.dialogRef.close();
  }

  onYes(formValues: { value: any; }) {
    if (!this.form.invalid) {

      this.instituicaoService.update(this.instituicaoDeEnsinoId, formValues.value)
        .subscribe(() => {
          this.dialogRef.close([this.instituicaoDeEnsinoId, formValues.value]);
        }, error => {
          alert("OCORREU UM ERRO NA HORA DE EDITAR \n" + error['_body'])
        });

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
