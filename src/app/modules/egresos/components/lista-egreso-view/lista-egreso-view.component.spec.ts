import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEgresoViewComponent } from './lista-egreso-view.component';

describe('ListaEgresoViewComponent', () => {
  let component: ListaEgresoViewComponent;
  let fixture: ComponentFixture<ListaEgresoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEgresoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEgresoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
