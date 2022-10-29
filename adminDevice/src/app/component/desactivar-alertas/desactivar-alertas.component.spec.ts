import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactivarAlertasComponent } from './desactivar-alertas.component';

describe('DesactivarAlertasComponent', () => {
  let component: DesactivarAlertasComponent;
  let fixture: ComponentFixture<DesactivarAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesactivarAlertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesactivarAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
