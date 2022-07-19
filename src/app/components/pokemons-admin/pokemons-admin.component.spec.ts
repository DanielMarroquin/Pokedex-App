import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsAdminComponent } from './pokemons-admin.component';

describe('PokemonsAdminComponent', () => {
  let component: PokemonsAdminComponent;
  let fixture: ComponentFixture<PokemonsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
