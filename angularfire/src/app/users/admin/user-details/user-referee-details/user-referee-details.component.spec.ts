import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRefereeDetailsComponent } from './user-referee-details.component';

describe('UserRefereeDetailsComponent', () => {
  let component: UserRefereeDetailsComponent;
  let fixture: ComponentFixture<UserRefereeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRefereeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRefereeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
