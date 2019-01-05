import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCidadeComponent } from './adicionar-cidade.component';

describe('AdicionarCidadeComponent', () => {
  let component: AdicionarCidadeComponent;
  let fixture: ComponentFixture<AdicionarCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
