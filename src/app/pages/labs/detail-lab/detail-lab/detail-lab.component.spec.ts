import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLabComponent } from './detail-lab.component';

describe('DetailLabComponent', () => {
  let component: DetailLabComponent;
  let fixture: ComponentFixture<DetailLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
