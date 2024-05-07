import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContextComponent } from './user-context.component';

describe('UserContextComponent', () => {
  let component: UserContextComponent;
  let fixture: ComponentFixture<UserContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserContextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
