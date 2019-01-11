import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EstadoService } from '../../services/estado/estado.service';
import { CidadeService } from '../../services/cidade/cidade.service';

@Component({
  selector: 'app-atualizar-cidade',
  templateUrl: './atualizar-cidade.component.html',
  styleUrls: ['./atualizar-cidade.component.css']
})
export class AtualizarCidadeComponent implements OnInit {
  cidadeId = this.data.cidadeId;
  estados: any[];

  form = new FormGroup({
    estadoId: new FormControl(this.data.estado.estadoId, [Validators.required]),
    nome: new FormControl(this.data.nome, [Validators.required, Validators.pattern("[a-zA-ZÀ-ú\' ]*")])
  });

  get formNome() {
    return this.form.get("nome");
  }

  get formUF() {
    return this.form.get("estadoId");
  }

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    public dialogRef: MatDialogRef<AtualizarCidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  onNo(): void {
    this.dialogRef.close();
  }

  onYes(){
    if (!this.form.invalid) {
      this.dialogRef.close([this.cidadeId, this.form.value])

      this.cidadeService.update(this.cidadeId, this.form.value)
      .subscribe((cidadeEdited) => {
        this.dialogRef.close([this.cidadeId, cidadeEdited])
      }, error => {
        alert("OCORREU UM ERRO NA HORA DE EDITAR \n" + error['_body'])
      });

    } else {
      alert("Preencha o campo corretamente");
    }
  }

  ngOnInit(): void {
    this.estadoService.getAll()
      .subscribe(estados => {
        this.estados = estados;
      });
  }

}
