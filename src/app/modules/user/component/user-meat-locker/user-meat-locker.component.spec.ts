import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMeatLockerComponent } from './user-meat-locker.component';

describe('UserMeatLockerComponent', () => {
  let component: UserMeatLockerComponent;
  let fixture: ComponentFixture<UserMeatLockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMeatLockerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserMeatLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
