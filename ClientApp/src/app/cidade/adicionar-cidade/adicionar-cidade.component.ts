import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EstadoService } from '../../services/estado/estado.service';
import { CidadeService } from '../../services/cidade/cidade.service';

@Component({
  selector: 'app-adicionar-cidade',
  templateUrl: './adicionar-cidade.component.html',
  styleUrls: ['./adicionar-cidade.component.css']
})
export class AdicionarCidadeComponent implements OnInit {
  estados: any[];

  form = new FormGroup({
    estadoId: new FormControl(this.getEstadoId(), [Validators.required]),
    nome: new FormControl("", [Validators.required, Validators.pattern("[a-zA-ZÀ-ú\' ]*")])
  });

  get nome() {
    return this.form.get("nome");
  }

  get estadoId() {
    return this.form.get("estadoId");
  }

  getEstadoId(){
    if(this.data.estado.estadoId == "") return "";

    return this.data.estado.estadoId;
  }

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    public dialogRef: MatDialogRef<AdicionarCidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.estadoService.getAll()
      .subscribe(estados => {
        this.estados = estados;
      });
  }

  onNo(): void {
    this.dialogRef.close();
  }

  onYes(){
    if (!this.form.invalid) {
      
      this.cidadeService.create(this.form.value)
        .subscribe(newCidade => {
          this.dialogRef.close(newCidade);
        }, error => {
          alert("OCORREU UM ERRO NA HORA DE CRIAR \n" + error['_body'])
        });

    } else {
      alert("Preencha o campo corretamente");
    }
  }

}