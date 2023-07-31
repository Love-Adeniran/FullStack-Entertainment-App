import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachProfileComponent } from './each-profile.component';

describe('EachProfileComponent', () => {
  let component: EachProfileComponent;
  let fixture: ComponentFixture<EachProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
