import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAdminComponent } from './poke-admin.component';

describe('PokeAdminComponent', () => {
  let component: PokeAdminComponent;
  let fixture: ComponentFixture<PokeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
