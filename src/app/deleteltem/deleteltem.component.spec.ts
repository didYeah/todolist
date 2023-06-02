import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteltemComponent } from './deleteltem.component';

describe('DeleteltemComponent', () => {
  let component: DeleteltemComponent;
  let fixture: ComponentFixture<DeleteltemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteltemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteltemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
