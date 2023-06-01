import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectitemComponent } from './selectitem.component';

describe('SelectitemComponent', () => {
  let component: SelectitemComponent;
  let fixture: ComponentFixture<SelectitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
