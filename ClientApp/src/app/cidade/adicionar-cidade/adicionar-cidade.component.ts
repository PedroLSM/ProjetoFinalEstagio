import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EstadoService } from '../../services/estado/estado.service';

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
      this.dialogRef.close(this.form.value)
    } else {
      alert("Preencha o campo corretamente");
    }
  }

}