import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaInstituicaoDeEnsinoComponent } from './nova-instituicao-de-ensino.component';

describe('NovaInstituicaoDeEnsinoComponent', () => {
  let component: NovaInstituicaoDeEnsinoComponent;
  let fixture: ComponentFixture<NovaInstituicaoDeEnsinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaInstituicaoDeEnsinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaInstituicaoDeEnsinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
