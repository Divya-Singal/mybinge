import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovDescComponent } from './nov-desc.component';

describe('NovDescComponent', () => {
  let component: NovDescComponent;
  let fixture: ComponentFixture<NovDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
