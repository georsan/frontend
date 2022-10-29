import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarAlertasComponent } from './activar-alertas.component';

describe('ActivarAlertasComponent', () => {
  let component: ActivarAlertasComponent;
  let fixture: ComponentFixture<ActivarAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivarAlertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivarAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
