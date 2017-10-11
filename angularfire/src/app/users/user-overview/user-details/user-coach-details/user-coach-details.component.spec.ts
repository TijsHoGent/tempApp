import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoachDetailsComponent } from './user-coach-details.component';

describe('UserCoachDetailsComponent', () => {
  let component: UserCoachDetailsComponent;
  let fixture: ComponentFixture<UserCoachDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCoachDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoachDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
