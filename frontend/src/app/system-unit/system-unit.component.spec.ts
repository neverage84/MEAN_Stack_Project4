import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUnitComponent } from './system-unit.component';

describe('SystemUnitComponent', () => {
  let component: SystemUnitComponent;
  let fixture: ComponentFixture<SystemUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
