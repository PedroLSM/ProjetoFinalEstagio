import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EstadoService } from '../../services/estado/estado.service';

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

  constructor(private estadoService: EstadoService, private dialogRef: MatDialogRef<UpdateEstadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  onNo() {
    return this.dialogRef.close();
  }

  onYes(formValues: { value: any; }) {
    if (!this.formUpdate.invalid) {
      this.estadoService.update(this.estadoId, formValues.value)
        .subscribe(() => {
          this.dialogRef.close([this.estadoId, formValues.value]);
        }, error => {
          alert("OCORREU UM ERRO NA HORA DE ATUALIZAR \n" + error['_body'])
        });
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
