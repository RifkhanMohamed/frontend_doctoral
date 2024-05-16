import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologyLabComponent } from './biology-lab.component';

describe('BiologyLabComponent', () => {
  let component: BiologyLabComponent;
  let fixture: ComponentFixture<BiologyLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiologyLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiologyLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
