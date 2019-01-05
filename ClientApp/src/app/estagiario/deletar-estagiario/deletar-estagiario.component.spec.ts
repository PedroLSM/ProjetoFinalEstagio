import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarEstagiarioComponent } from './deletar-estagiario.component';

describe('DeletarEstagiarioComponent', () => {
  let component: DeletarEstagiarioComponent;
  let fixture: ComponentFixture<DeletarEstagiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarEstagiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarEstagiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
