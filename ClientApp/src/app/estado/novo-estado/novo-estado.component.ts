import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EstadoService } from '../../services/estado/estado.service';

@Component({
  selector: 'app-novo-estado',
  templateUrl: './novo-estado.component.html',
  styleUrls: ['./novo-estado.component.css']
})
export class NovoEstadoComponent implements OnInit {

  constructor(private estadoService: EstadoService, private dialogRef: MatDialogRef<NovoEstadoComponent>, 
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

  onYes(formValues: { value: any; }){
    if (!this.formAdd.invalid) {

      this.estadoService.create(formValues.value)
        .subscribe(newEstado => {
          this.dialogRef.close(newEstado);
        }, error => {
          alert("OCORREU UM ERRO NA HORA DE CRIAR \n" + error['_body'])
        });
        
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
