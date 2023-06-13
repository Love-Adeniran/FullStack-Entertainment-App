import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McompleteProfileComponent } from './mcomplete-profile.component';

describe('McompleteProfileComponent', () => {
  let component: McompleteProfileComponent;
  let fixture: ComponentFixture<McompleteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McompleteProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McompleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
