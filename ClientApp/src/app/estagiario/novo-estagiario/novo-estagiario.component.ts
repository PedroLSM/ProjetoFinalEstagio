import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InstituicaoService } from '../../services/instituicao/instituicao.service';
import { IInstituicaoDeEnsino } from '../../services/instituicao/IInstituicaoDeEnsino';
import { CidadeService } from '../../services/cidade/cidade.service';


@Component({
  selector: 'app-novo-estagiario',
  templateUrl: './novo-estagiario.component.html',
  styleUrls: ['./novo-estagiario.component.css']
})
export class NovoEstagiarioComponent implements OnInit {

  instituicoes: any[];
  cidades: any[];

  maxDate = this.dataLimite();

  form = new FormGroup({
    instituicaoDeEnsinoId: new FormControl('', [Validators.required]),
    cidadeId: new FormControl('', [Validators.required]),
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(45),
      Validators.pattern('[a-zA-ZÀ-ú\' ]*')
    ]),
    dataNasc: new FormControl('', [Validators.required])
  });

  constructor(private instituicaoService: InstituicaoService, private cidadeService: CidadeService, public dialogRef: MatDialogRef<NovoEstagiarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.instituicaoService.getAll().subscribe(
      instituicoes => {
        this.instituicoes = instituicoes;
      },
      error => console.log(error)
    );

    this.cidadeService.getAll().subscribe(
      cidades => {
        this.cidades = cidades;
      },
      error => console.log(error)
    );
  }

  dataLimite() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear() - 15;

    return new Date(yyyy, mm, dd);
  }

  convertDate(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);

    return [day, mnth, date.getFullYear() ].join("/");
  }

  get instituicao() {
    return this.form.get('instituicaoDeEnsinoId');
  }

  get cidade() {
    return this.form.get('cidadeId');
  }

  get nome() {
    return this.form.get('nome');
  }

  get dataNasc() {
    return this.form.get('dataNasc');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(formValues): void {
    if (!this.form.invalid) {
      formValues.value.dataNasc = this.convertDate(formValues.value.dataNasc);
      this.dialogRef.close(formValues.value);
    } else {
      alert('CONTÉM CAMPOS INVÁLIDOS');
    }
  }

}
