import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InstituicaoService } from '../../services/instituicao/instituicao.service';

@Component({
  selector: 'app-nova-instituicao-de-ensino',
  templateUrl: './nova-instituicao-de-ensino.component.html',
  styleUrls: ['./nova-instituicao-de-ensino.component.css']
})
export class NovaInstituicaoDeEnsinoComponent implements OnInit {
  form = new FormGroup({
    sigla: new FormControl('', 
    [
      Validators.required, 
      Validators.maxLength(8), 
      Validators.pattern('[A-Z0-9]*')
    ]),
    nome: new FormControl('', [Validators.required])
  });

  constructor(private instituicaoService: InstituicaoService, private dialogRef: MatDialogRef<NovaInstituicaoDeEnsinoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
  }

  onNo() {
    return this.dialogRef.close();
  }

  onYes(formValues: { value: any; }){
    if (!this.form.invalid) {

      this.instituicaoService.create(formValues.value)
        .subscribe(newInstituicao => {
          this.dialogRef.close(newInstituicao);
        }, error => {
          alert("OCORREU UM ERRO NA HORA DE CRIAR\n" + error['_body'])
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
