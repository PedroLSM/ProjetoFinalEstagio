import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CidadeService } from '../../services/cidade/cidade.service';

@Component({
  selector: 'app-deletar-cidade',
  templateUrl: './deletar-cidade.component.html',
  styleUrls: ['./deletar-cidade.component.css']
})
export class DeletarCidadeComponent implements OnInit {

  constructor(
    private cidadeService: CidadeService,
    public dialogRef: MatDialogRef<DeletarCidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

    onNo(): void {
      this.dialogRef.close();
    }
  
    onYes(){
      this.cidadeService.delete(this.data.cidadeId)
        .subscribe(() => {
          this.dialogRef.close(this.data);
        }, error => {
          alert("OCORREU UM ERRO NA HORA DE DELETAR \n" + error['_body'])
        });
    }

  ngOnInit() {
  }

}
