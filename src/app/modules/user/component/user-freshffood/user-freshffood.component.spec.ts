import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFreshffoodComponent } from './user-freshffood.component';

describe('UserFreshffoodComponent', () => {
  let component: UserFreshffoodComponent;
  let fixture: ComponentFixture<UserFreshffoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFreshffoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserFreshffoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
