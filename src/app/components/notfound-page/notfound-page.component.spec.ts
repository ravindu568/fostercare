import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundPageComponent } from './notfound-page.component';

describe('NotfoundPageComponent', () => {
  let component: NotfoundPageComponent;
  let fixture: ComponentFixture<NotfoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotfoundPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotfoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
