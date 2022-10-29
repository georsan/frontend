import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasyreportesComponent } from './alertasyreportes.component';

describe('AlertasyreportesComponent', () => {
  let component: AlertasyreportesComponent;
  let fixture: ComponentFixture<AlertasyreportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertasyreportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertasyreportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
