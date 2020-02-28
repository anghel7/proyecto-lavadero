import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTrabajoViewComponent } from './ver-trabajo-view.component';

describe('VerTrabajoViewComponent', () => {
  let component: VerTrabajoViewComponent;
  let fixture: ComponentFixture<VerTrabajoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTrabajoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTrabajoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
