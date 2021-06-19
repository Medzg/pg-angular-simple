import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestBookComponent } from './gest-book.component';

describe('GestBookComponent', () => {
  let component: GestBookComponent;
  let fixture: ComponentFixture<GestBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
