import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaoDeEnsinoComponent } from './instituicao-de-ensino.component';

describe('InstituicaoDeEnsinoComponent', () => {
  let component: InstituicaoDeEnsinoComponent;
  let fixture: ComponentFixture<InstituicaoDeEnsinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituicaoDeEnsinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicaoDeEnsinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
