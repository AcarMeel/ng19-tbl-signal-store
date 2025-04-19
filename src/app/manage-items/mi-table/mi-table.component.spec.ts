import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiTableComponent } from './mi-table.component';

describe('MiTableComponent', () => {
  let component: MiTableComponent;
  let fixture: ComponentFixture<MiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
