import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CidadeComponent } from './cidade/cidade.component';
import { EstagiarioComponent } from './estagiario/estagiario.component';
import { EstadoComponent } from './estado/estado.component';
import { InstituicaoDeEnsinoComponent } from './instituicao-de-ensino/instituicao-de-ensino.component';
import { MaterialModule } from './material/material.module';
import { NovoEstagiarioComponent } from './estagiario/novo-estagiario/novo-estagiario.component';
import { NovoEstadoComponent } from './estado/novo-estado/novo-estado.component';
import { AdicionarCidadeComponent } from './cidade/adicionar-cidade/adicionar-cidade.component';
import { AtualizarCidadeComponent } from './cidade/atualizar-cidade/atualizar-cidade.component';
import { DeletarCidadeComponent } from './cidade/deletar-cidade/deletar-cidade.component';
import { DeletarEstadoComponent } from './estado/deletar-estado/deletar-estado.component';
import { UpdateEstadoComponent } from './estado/update-estado/update-estado.component';
import { HttpModule } from '@angular/http';
import { EditarEstagiarioComponent } from './estagiario/editar-estagiario/editar-estagiario.component';
import { NovaInstituicaoDeEnsinoComponent } from './instituicao-de-ensino/nova-instituicao-de-ensino/nova-instituicao-de-ensino.component';
import { DeletarEstagiarioComponent } from './estagiario/deletar-estagiario/deletar-estagiario.component';
import { CidadeService } from './services/cidade/cidade.service';
import { EstadoService } from './services/estado/estado.service';
import { EditarInstituicaoDeEnsinoComponent } from './instituicao-de-ensino/editar-instituicao-de-ensino/editar-instituicao-de-ensino.component';
import { DeletarInstituicaoDeEnsinoComponent } from './instituicao-de-ensino/deletar-instituicao-de-ensino/deletar-instituicao-de-ensino.component';
import { MostrarAlunosComponent } from './instituicao-de-ensino/mostrar-alunos/mostrar-alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CidadeComponent,
    EstagiarioComponent,
    EstadoComponent,
    InstituicaoDeEnsinoComponent,
    NovoEstagiarioComponent,
    NovoEstadoComponent,
    AdicionarCidadeComponent,
    AtualizarCidadeComponent,
    DeletarCidadeComponent,
    DeletarEstadoComponent,
    UpdateEstadoComponent,
    EditarEstagiarioComponent,
    NovaInstituicaoDeEnsinoComponent,
    DeletarEstagiarioComponent,
    EditarInstituicaoDeEnsinoComponent,
    DeletarInstituicaoDeEnsinoComponent,
    MostrarAlunosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    CidadeService, EstadoService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NovoEstadoComponent,
    UpdateEstadoComponent,
    DeletarEstadoComponent,
    AdicionarCidadeComponent,
    AtualizarCidadeComponent,
    DeletarCidadeComponent,
    NovoEstagiarioComponent,
    EditarEstagiarioComponent,
    DeletarEstagiarioComponent,
    NovaInstituicaoDeEnsinoComponent,
    EditarInstituicaoDeEnsinoComponent,
    DeletarInstituicaoDeEnsinoComponent,
    MostrarAlunosComponent
  ]
})
export class AppModule { }