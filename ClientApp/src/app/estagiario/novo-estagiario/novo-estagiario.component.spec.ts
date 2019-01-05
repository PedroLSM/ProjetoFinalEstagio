import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoEstagiarioComponent } from './novo-estagiario.component';

describe('NovoEstagiarioComponent', () => {
  let component: NovoEstagiarioComponent;
  let fixture: ComponentFixture<NovoEstagiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoEstagiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoEstagiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
