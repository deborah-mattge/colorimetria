import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinacoesComponent } from './combinacoes.component';

describe('CombinacoesComponent', () => {
  let component: CombinacoesComponent;
  let fixture: ComponentFixture<CombinacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
