import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDryfoodComponent } from './user-dryfood.component';

describe('UserDryfoodComponent', () => {
  let component: UserDryfoodComponent;
  let fixture: ComponentFixture<UserDryfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDryfoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDryfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
