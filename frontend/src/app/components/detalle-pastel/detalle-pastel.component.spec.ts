import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePastelComponent } from './detalle-pastel.component';

describe('DetallePastelComponent', () => {
  let component: DetallePastelComponent;
  let fixture: ComponentFixture<DetallePastelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePastelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
