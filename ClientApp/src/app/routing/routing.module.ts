import { InstituicaoDeEnsinoComponent } from './../instituicao-de-ensino/instituicao-de-ensino.component';
import { EstagiarioComponent } from './../estagiario/estagiario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EstadoComponent } from '../estado/estado.component';
import { CidadeComponent } from '../cidade/cidade.component';

const routes: Routes = [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'estagiario', component: EstagiarioComponent },
      { path: 'instituicao', component: InstituicaoDeEnsinoComponent },
      { path: 'cidade', component: CidadeComponent },
      { path: 'estado', component: EstadoComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
