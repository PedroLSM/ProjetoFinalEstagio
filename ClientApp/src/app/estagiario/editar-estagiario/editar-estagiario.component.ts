import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InstituicaoService } from '../../services/instituicao/instituicao.service';
import { CidadeService } from '../../services/cidade/cidade.service';

const INSTITUICAO = [
  { id: 1, nome: "EEEP LEONEL DE MOURA BRIZOLA" },
  { id: 2, nome: "Faculdade 7 de Setembro" }
]

const CIDADE = [
  { cidadeId: 1, nome: 'Fortaleza', UF: "CE" },
  { cidadeId: 2, nome: 'São Paulo', UF: "SP" },
  { cidadeId: 3, nome: 'Rio de Janeiro', UF: "RJ" }
]

@Component({
  selector: 'app-editar-estagiario',
  templateUrl: './editar-estagiario.component.html',
  styleUrls: ['./editar-estagiario.component.css']
})
export class EditarEstagiarioComponent implements OnInit {
  instituicoes: any[];
  cidades: any[];
  maxDate = this.dataLimite();
  
  estagiarioId = this.data.estagiarioId;

  form = new FormGroup({
    instituicaoDeEnsinoId: new FormControl(this.data.instituicaoDeEnsino.instituicaoDeEnsinoId, [Validators.required]),
    cidadeId: new FormControl(this.data.cidade.cidadeId, [Validators.required]),
    nome: new FormControl(this.data.nome, [
      Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(45), 
      Validators.pattern('[a-zA-ZÀ-ú\' ]*')
    ]),
    dataNasc: new FormControl(this.dataWrite(), [Validators.required])
  });

  constructor(private instituicaoService: InstituicaoService, private cidadeService: CidadeService,
    public dialogRef: MatDialogRef<EditarEstagiarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }
  
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
  

  dataWrite() {
    return this.data.dataNasc.split('/').reverse().join('-');
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

  convertDate(str: string) {
    if(str.length <= 10) return str.split("-").reverse().join("/");

    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);

      return [day, mnth, date.getFullYear() ].join("/");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(formValues): void {
    if (!this.form.invalid) {
      formValues.value.dataNasc = this.convertDate(formValues.value.dataNasc);
      this.dialogRef.close([this.estagiarioId, formValues.value]);
    } else {
      alert('CONTÉM CAMPOS INVÁLIDOS');
    }
  }

}
