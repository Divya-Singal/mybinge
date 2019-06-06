import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovListComponent } from './nov-list.component';

describe('NovListComponent', () => {
  let component: NovListComponent;
  let fixture: ComponentFixture<NovListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
