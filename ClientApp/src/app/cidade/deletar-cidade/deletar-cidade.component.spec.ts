import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarCidadeComponent } from './deletar-cidade.component';

describe('DeletarCidadeComponent', () => {
  let component: DeletarCidadeComponent;
  let fixture: ComponentFixture<DeletarCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
