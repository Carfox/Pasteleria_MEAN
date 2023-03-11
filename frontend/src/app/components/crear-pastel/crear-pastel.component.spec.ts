import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPastelComponent } from './crear-pastel.component';

describe('CrearPastelComponent', () => {
  let component: CrearPastelComponent;
  let fixture: ComponentFixture<CrearPastelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPastelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
