import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeologyLabComponent } from './geology-lab.component';

describe('GeologyLabComponent', () => {
  let component: GeologyLabComponent;
  let fixture: ComponentFixture<GeologyLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeologyLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeologyLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
